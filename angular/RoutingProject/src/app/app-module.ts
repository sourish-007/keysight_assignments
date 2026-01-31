import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsComponent } from './products/products';
import { ProductDetailComponent } from './product-detail/product-detail';

@NgModule({
  declarations: [
    App,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,          // ✅ ADD THIS
    AppRoutingModule
  ],
  bootstrap: [App]
})
export class AppModule {}
