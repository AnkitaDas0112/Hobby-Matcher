import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // RegistrationFormComponent,
    //MainPageComponent,
    SearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
