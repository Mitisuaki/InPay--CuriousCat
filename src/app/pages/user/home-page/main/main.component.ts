import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home-page-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class UserHomePageMainComponent {

  public togglePrivacy():void{

    const elements = document.querySelectorAll("#privacy");

    elements.forEach(el => {
      el.classList.toggle("ri-eye-line");
      el.classList.toggle("secondary-privacy-color");
    });

    const balances = document.querySelectorAll("#balance-value");

    balances.forEach(el => {
      el.classList.toggle("box-blur")
    })
  }

}
