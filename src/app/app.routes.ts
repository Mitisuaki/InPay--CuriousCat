import { Routes } from '@angular/router';
import { HistoricoTransacoesComponent } from './components/pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { CadastroContaComponent } from './components/pages/user/cadastro-conta/cadastro-conta.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AccessAccountComponent } from './components/pages/user/access-account/access-account.component';
import { AccountHomeComponent } from './components/pages/user/account-home/account-home.component';
import { DepositoComponent } from './components/pages/user/deposito/deposito.component';

export const routes: Routes = [
  {path:"", component: HomeComponent}, //home
  {path:"sign-up", component: CadastroUsuarioComponent}, //cadastro-usuario
  {path:"user/account",component: AccessAccountComponent}, //acessar-conta
  {path:"user/register-account", component: CadastroContaComponent}, //cadastrar-conta
  {path:"account-home",component: AccountHomeComponent}, //inicio-conta
  {path:"",component: AccountHomeComponent},
  {path:"account/deposito",component: DepositoComponent},
];
