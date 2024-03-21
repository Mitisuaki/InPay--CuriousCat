import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CartaoCreditoComponentComponent } from './cartao-credito-component/cartao-credito-component.component';

@Component({
  selector: 'cartao-credito-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CartaoCreditoComponentComponent
   ],
  templateUrl: './cartao-credito-page.component.html',
  styleUrl: './cartao-credito-page.component.css'
})
export class CartaoCreditoPageComponent {

}
