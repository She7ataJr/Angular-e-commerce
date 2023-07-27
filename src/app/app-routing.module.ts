import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component'; 
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {AuthGuard}from './Guards/auth.guard'

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent},
  {path:'product/:id',canActivate:[AuthGuard],component:ProductDetailsComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[AuthGuard],component:BrandsComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'settings',loadChildren:()=>import('././settings/settings.module').then((module)=>module.SettingsModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
