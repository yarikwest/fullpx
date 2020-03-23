import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../shared/services/message.service';
import {MzBaseModal} from 'ngx-materialize';

declare const M: any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent extends MzBaseModal implements OnInit {

  form: FormGroup;
  @Input() userEmail: string;
  @Output() close = new EventEmitter();

  constructor(
    private messageService: MessageService,
  ) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl()
    });
  }

  send() {
    if (this.form.invalid) {
      return;
    }

    const msg: Message = {
      to: this.userEmail,
      text: this.form.value.text,
      clientEmail: this.form.value.email,
      clientPhone: this.form.value.phone
    };

    this.messageService.send(msg).subscribe((resp) => {
      this.form.reset();
      M.toast({html: resp.message, classes: 'rounded teal darken-1'});
      this.close.emit();
    });

  }

}
