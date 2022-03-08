import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GenericProductListComponent } from './generic-product-list/generic-product-list.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home/dashboard', component: HomeDashboardComponent },
  { path: 'viewproduct', component: ViewproductComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'shippingaddress', component: ShippingAddressComponent },
  {path: 'dashboard/:category/:productType',component: GenericProductListComponent},
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  {path:'payment',component:PaymentComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'viewprofile/:mailId',component:ViewprofileComponent},
  {path:'updateprofile',component:UpdateprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
