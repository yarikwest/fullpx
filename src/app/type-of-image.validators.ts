import {FormControl} from '@angular/forms';

export class TypeOfImageValidators {
  static typeImage(control: FormControl): { [key: string]: boolean; } {

    if (control.value.startWith('image')) {
      return null;
    }

    return {
      isImage: true
    };
  }
}
