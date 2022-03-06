import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductComponent } from './product/product.component';
import { GenericProductListComponent } from './generic-product-list/generic-product-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    HomeDashboardComponent,
    ViewproductComponent,
    LogoutComponent,
    ShoppingCartComponent,
    ShippingAddressComponent,
    ProductComponent,
    GenericProductListComponent,
    ForgotPasswordComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
