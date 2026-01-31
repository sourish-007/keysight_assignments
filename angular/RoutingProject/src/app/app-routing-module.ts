import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home } from './home/home';
import { ProductsComponent } from './products/products';
import { ProductDetailComponent } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
