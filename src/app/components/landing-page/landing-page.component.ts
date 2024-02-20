import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

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
  constructor() {

  }
  ngOnInit(): void {
    main();
  }
}
