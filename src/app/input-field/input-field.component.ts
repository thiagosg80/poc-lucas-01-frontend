import { Component, Input, OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnChanges {
  value = '';
  @Input() label = '';
  @Input() analiseInputValue: string = '';
  @Output() inputFieldOutValue = new EventEmitter<string>();

  changeInputValue(input: string): void {
    this.inputFieldOutValue.emit(input);
  }

  ngOnChanges(): void {
    if (this.analiseInputValue) {
      this.value = this.analiseInputValue.replace('.', ',');
      this.changeInputValue(this.value);
    }
  }
}
