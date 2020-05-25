import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CandidatsComponent } from './components/candidats/candidats.component';
import { AppRoutingModule } from './app-routing.module';
import { NewCandidatComponent } from './components/new-candidat/new-candidat.component';
import { TemplateComponent } from './components/template/template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCandidatComponent } from './components/edit-candidat/edit-candidat.component';
import { NewEntretienComponent } from './components/new-entretien/new-entretien.component';
import { EntretiensComponent } from './components/entretiens/entretiens.component';
import { EditEntretienComponent } from './components/edit-entretien/edit-entretien.component';
import { ResponsablesComponent } from './components/responsables/responsables.component';
import { NewResponsableComponent } from './components/new-responsable/new-responsable.component';
import { EditResponsableComponent } from './components/edit-responsable/edit-responsable.component';
import {DatePipe} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import {AuthInterceptor} from "./services/auth.interceptor";



@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    NewCandidatComponent,
    TemplateComponent,
    DashboardComponent,
    EditCandidatComponent,
    NewEntretienComponent,
    EntretiensComponent,
    EditEntretienComponent,
    ResponsablesComponent,
    NewResponsableComponent,
    EditResponsableComponent,
    RegisterComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    ],
  providers: [DatePipe,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
