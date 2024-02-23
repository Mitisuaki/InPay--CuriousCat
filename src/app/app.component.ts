import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./components/landing-page/landing-page.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, LandingPageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {
  title = 'InPay | A fintech feita para você';

  ngOnInit(): void {

  }
}
