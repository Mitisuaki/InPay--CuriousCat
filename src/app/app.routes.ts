import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HomePageComponent } from './components/pages/user/home-page/home-page.component';
import { HistoricoTransacoesComponent } from './components/pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { CartaoCreditoPageComponent } from './components/pages/user/cartao-credito-page/cartao-credito-page.component';


export const routes: Routes = [
  {path:"user/home-page", component: HomePageComponent},
  {path:"user/transactions", component: HistoricoTransacoesComponent},
  {path:"user/card-Page", component: CartaoCreditoPageComponent },
  {path:"cadastro", component: CadastroUsuarioComponent},
  {path:"", component: LandingPageComponent}
];
