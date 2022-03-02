import { Component, Renderer2, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private renderer: Renderer2) {}

  save() {
    const firstName = this.renderer.selectRootElement('#firstname').value;
    const lastName = this.renderer.selectRootElement('#lastname').value;
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const message = `${firstName}_${lastName}_${randomNumber}`;
    const span = this.renderer.selectRootElement('#output');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(span, text);
  }
}
