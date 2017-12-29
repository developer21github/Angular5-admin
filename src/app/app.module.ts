import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule} from '@angular/material';
import {ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/layout/navbar/navbar.component';
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { FooterComponent } from './admin/layout/footer/footer.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProductService } from './admin/product/product.service';
import { ProductIndexComponent } from './admin/product/productIndex.component';
import { LoginComponent } from './admin/login/login.component';
import { LocalStorage } from './storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CategoryComponent,
    ProductComponent,
    ProfileComponent,
    ProductIndexComponent,
    LoginComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [ProductService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {

}
