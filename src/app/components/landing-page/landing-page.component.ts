import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

// função para rodar o arquivo script.js
declare function main():void;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    // Função para rodar arquivo script.js
    main();
  }
}
