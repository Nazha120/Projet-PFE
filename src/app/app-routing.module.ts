import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatsComponent } from './components/candidats/candidats.component';
import { NewCandidatComponent } from './components/new-candidat/new-candidat.component';
import { EditCandidatComponent } from './components/edit-candidat/edit-candidat.component';
import { NewEntretienComponent } from './components/new-entretien/new-entretien.component';
import { EntretiensComponent } from './components/entretiens/entretiens.component';
import { EditEntretienComponent } from './components/edit-entretien/edit-entretien.component';
import { EditResponsableComponent } from './components/edit-responsable/edit-responsable.component';
import { ResponsablesComponent } from './components/responsables/responsables.component';
import { NewResponsableComponent } from './components/new-responsable/new-responsable.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";





const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'login', component: LoginComponent},
  { path: 'candidats', component: CandidatsComponent },
  { path: 'add-candidat', component: NewCandidatComponent },
  { path: 'edit-candidat/:id', component: EditCandidatComponent },
  { path: 'new-entretien', component:NewEntretienComponent},
  { path: 'entretiens', component: EntretiensComponent},
  { path: 'edit-entretien/:id', component: EditEntretienComponent},
  { path: 'edit-responsable/:id', component: EditResponsableComponent},
  { path: 'responsables', component: ResponsablesComponent},
  { path: 'add-responsable', component: NewResponsableComponent },

  { path: '', redirectTo: 'dashboard' , pathMatch: 'full' },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
