import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/layout/navbar/navbar.component';
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { FooterComponent } from './admin/layout/footer/footer.component';
import { CategoryComponent } from './admin/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
