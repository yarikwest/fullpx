import {Pipe, PipeTransform} from '@angular/core';

declare var $: any;

@Pipe({
  name: 'flexGallery'
})
export class FlexGalleryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    setTimeout(() => {
      $(value).flexGallery();
    }, 2);

  }

}

