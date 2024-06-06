import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrl: './dumb.component.scss'
})
export class DumbComponent {
  // optional
  age = input();                    
  // required
  name = input.required<string>();

  onNameChange = output<string>();

  public onEnter(event: any): void {
    this.onNameChange.emit(event.target.value);
  }
}
