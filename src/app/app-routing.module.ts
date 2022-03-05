import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyDashboardComponent } from './beauty-dashboard/beauty-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GenericProductListComponent } from './generic-product-list/generic-product-list.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeComponent } from './home/home.component';
import { KidsDashboardComponent } from './kids-dashboard/kids-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenDashboardComponent } from './men-dashboard/men-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: MenDashboardComponent },
  { path: 'kids/dashboard', component: KidsDashboardComponent },
  { path: 'home/dashboard', component: HomeDashboardComponent },
  { path: 'beauty/dashboard', component: BeautyDashboardComponent },
  { path: 'viewproduct', component: ViewproductComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'shippingaddress', component: ShippingAddressComponent },
  {
    path: 'dashboard/:category/:productType',
    component: GenericProductListComponent,
  },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
