import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CartaoCreditoComponentComponent } from './cartao-credito-component/cartao-credito-component.component';
import { NavMenuCartaoCreditoComponentComponent } from './nav-menu-cartao-credito-component/nav-menu-cartao-credito-component.component';
import { InformacaoValoresComponentComponent } from './informacao-valores-component/informacao-valores-component.component';
import { AcompanhaLimiteComponentComponent } from './acompanha-limite-component/acompanha-limite-component.component';
import { BotoesControleCartaoComponentComponent } from './botoes-controle-cartao-component/botoes-controle-cartao-component.component';
import { AtividadesRealizadasComponentComponent } from './atividades-realizadas-component/atividades-realizadas-component.component';

@Component({
  selector: 'cartao-credito-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CartaoCreditoComponentComponent,
    NavMenuCartaoCreditoComponentComponent,
    InformacaoValoresComponentComponent,
    AcompanhaLimiteComponentComponent,
    BotoesControleCartaoComponentComponent,
    AtividadesRealizadasComponentComponent
   ],
  templateUrl: './cartao-credito-page.component.html',
  styleUrl: './cartao-credito-page.component.css'
})
export class CartaoCreditoPageComponent {

}
