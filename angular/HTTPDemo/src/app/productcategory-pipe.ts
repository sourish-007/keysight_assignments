import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'productCategory',
  standalone: true
})
export class ProductCategoryPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if (!category || category === 'ALL') {
      return products;
    }
    return products.filter(product => product.category === category);
  }

}
