import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Photo} from '../shared/interfaces';
import {PhotoDetailsComponent} from '../photo-details/photo-details.component';
import {RefDirective} from '../shared/ref.directive';
import {CommunicateService} from '../shared/services/communicate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  @Input() photos: Photo[] = [];
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;
  sub: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private communicateService: CommunicateService,
  ) {
  }

  ngOnInit() {
    this.sub = this.communicateService.photos$.subscribe(photos => this.photos = photos);
  }

  openPhoto(index: number) {
    const modalFactory = this.resolver.resolveComponentFactory(PhotoDetailsComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.photos = this.photos;
    component.instance.index = index;
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
