import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  value = '';
  @Input() label = '';
  @Output() inputFieldOutValue = new EventEmitter<string>();

  changeInputValue(input: string): void {
    this.inputFieldOutValue.emit(input);
  }
}
