import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import { ParrainageComponent } from './parrainage/parrainage.component';
import {ElecteursComponent} from "./components/electeurs/electeurs.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'electeur', component:ElecteursComponent},
  {path:'parrainage', component:ParrainageComponent}
];




];
