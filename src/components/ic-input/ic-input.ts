import { Component, Input } from '@angular/core';

@Component({
  selector: 'ic-input',
  templateUrl: 'ic-input.html'
})
export class IcInputComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  constructor() {}

}
