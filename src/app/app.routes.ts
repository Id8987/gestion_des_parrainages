import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import { ParrainageComponent } from './parrainage/parrainage.component';

export const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'parrainage', component:ParrainageComponent}

];
