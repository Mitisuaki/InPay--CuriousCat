import { Routes } from '@angular/router';
import { HistoricoTransacoesComponent } from './components/pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AccessAccountComponent } from './components/pages/user/access-account/access-account.component';

export const routes: Routes = [
  {path:"user/transactions", component: HistoricoTransacoesComponent},
  {path:"sign-up", component: CadastroUsuarioComponent},
  {path:"user/account",component: AccessAccountComponent},
  {path:"", component: HomeComponent}
];
