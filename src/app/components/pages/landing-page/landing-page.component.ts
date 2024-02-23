import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LoginModalComponent } from "../login-modal/login-modal.component";

// função para rodar o arquivo script.js
declare function main():void;

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [
        NgOptimizedImage,
        LoginModalComponent
    ]
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    // Função para rodar arquivo script.js
    main();
  }
}
