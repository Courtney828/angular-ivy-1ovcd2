import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AddProductsComponent } from "../add-products/add-products.component";
import { Routes, RouterModule } from "@angular/router";

const appRouting: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "add-products", component: AddProductsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRouting)],
  declarations: []
})
export class AppRoutingModule {}
