import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MainPageComponent } from './main-page/main-page.component';
const routes: Routes = [
  {path:"registration-form", component: RegistrationFormComponent},
  {path:"MainPageComponent",component:MainPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationFormComponent,MainPageComponent]