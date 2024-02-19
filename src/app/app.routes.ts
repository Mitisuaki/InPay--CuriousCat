import { Routes } from '@angular/router';
import { CEPTestComponent } from './pages/cep-test/cep-test.component';

export const routes: Routes = [
  {path:"cep-test", component: CEPTestComponent},
  {path:"", redirectTo: "/cep-test", pathMatch:"full"}
];
