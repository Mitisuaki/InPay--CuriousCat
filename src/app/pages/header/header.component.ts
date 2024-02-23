import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public changeDarkLightMode(event:Event):void {
    const themeButton:HTMLElement = <HTMLElement>event.target;
    const LightTheme:string = "ri-sun-line";

    themeButton.classList.toggle(LightTheme);
  }
}
