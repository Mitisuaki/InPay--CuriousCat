import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';


@Component({
  selector: 'app-user-home-page-header',
  standalone: true,
  imports: [NgOptimizedImage, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class UserHomePageHeaderComponent {

public changeDarkLightMode(event:Event):void {
  const themeButton:HTMLElement = <HTMLElement>event.target;
  const LightTheme:string = "ri-sun-line";

  themeButton.classList.toggle(LightTheme);
}

public sandwichButton() {

  const navMenu = <HTMLElement>document.getElementById('nav-menu');

  navMenu.classList.toggle('show-menu');

  const navLink = document.querySelectorAll('.nav_link');

  const linkAction = () => {
    const navMenu:HTMLElement = <HTMLElement>document.getElementById('nav-menu');
  }

  navLink.forEach(n => n.addEventListener('click', linkAction));
}

public async closeMenu(){

  const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

  const navMenu:any = document.querySelector('.show-menu') ;

  if(navMenu) {
    await delay(200);
    navMenu.classList.toggle('show-menu');
  }
}
}
