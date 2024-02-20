import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/user/home-page/home-page.component';


export const routes: Routes = [
  {path:"user/home-page", component: HomePageComponent},
  {path:"", redirectTo: "/home", pathMatch:"full"}];
