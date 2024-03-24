import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, ModalLoginComponent],
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
