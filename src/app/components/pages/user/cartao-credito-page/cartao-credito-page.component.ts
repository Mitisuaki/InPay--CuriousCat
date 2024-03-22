import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CartaoCreditoComponentComponent } from './cartao-credito-component/cartao-credito-component.component';
import { NavMenuCartaoCreditoComponentComponent } from './nav-menu-cartao-credito-component/nav-menu-cartao-credito-component.component';
import { InformacaoValoresComponentComponent } from './informacao-valores-component/informacao-valores-component.component';

@Component({
  selector: 'cartao-credito-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CartaoCreditoComponentComponent,
    NavMenuCartaoCreditoComponentComponent,
    InformacaoValoresComponentComponent
   ],
  templateUrl: './cartao-credito-page.component.html',
  styleUrl: './cartao-credito-page.component.css'
})
export class CartaoCreditoPageComponent {

}
