import { Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {AppComponent} from "./app.component";
import {TestComponent} from "./components/test/test.component";
import {ElecteursComponent} from "./components/electeurs/electeurs.component";

export const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'test',component:TestComponent},
  {path:'electeur', component:ElecteursComponent}
];
