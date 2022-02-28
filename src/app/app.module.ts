import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { MenDashboardComponent } from './men-dashboard/men-dashboard.component';
import { WomenDashboardComponent } from './women-dashboard/women-dashboard.component';
import { KidsDashboardComponent } from './kids-dashboard/kids-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { BeautyDashboardComponent } from './beauty-dashboard/beauty-dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    MenDashboardComponent,
    WomenDashboardComponent,
    KidsDashboardComponent,
    HomeDashboardComponent,
    BeautyDashboardComponent,
    ViewproductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
