import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { DeliveryViewComponent } from './Components/delivery-view/delivery-view.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { EditSupplierComponent } from './Components/edit-supplier/edit-supplier.component';
import { NewSupplierComponent } from './Components/new-supplier/new-supplier.component';
// End of Components.

// HTTP 
import { HttpClientModule } from '@angular/common/http';
// End of HTTP

// Angular Material
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
// End of Angular Material

@NgModule({
  declarations: [
    AppComponent,
    DeliveryViewComponent,
    EditProductComponent,
    EditSupplierComponent,
    NewSupplierComponent,
    NewProductComponent,
    LoginComponent,
    SignUpComponent,
    ConfirmationComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
