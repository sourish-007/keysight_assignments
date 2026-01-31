import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  sortOption = '';
  constructor(
    private productService: ProductService,
    private zone: NgZone
  ) {
    console.log('AppComponent constructor called');
  }

  getAllProducts(): void {
    console.log('GET button clicked');
    console.log('Before API call, products =', this.products);

    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('API response received:', data);

        this.zone.run(() => {
          this.products = data;
          console.log('Products assigned:', this.products);
        });
      },
      error: (err) => {
        console.error('API error:', err);
      },
      complete: () => {
        console.log('GET request completed');
      }
    });
  }

  addProduct(): void {
    console.log('ADD clicked');

    const product: Product = {
      id: 0,
      name: 'Smart Watch',
      description: 'Wearable Device',
      price: 250,
      category:'Electronics'
    };

    this.productService.addProduct(product).subscribe(() => {
      console.log('Product added');
      this.getAllProducts();
    });
  }

  updateProduct(): void {
    console.log('UPDATE clicked');

    const product: Product = {
      id: 1,
      name: 'Smart Watch X Series',
      description: 'Wearable Device with AI',
      price: 950,
      category: ''
    };

    this.productService.updateProduct(product).subscribe(() => {
      console.log('Product updated');
      this.getAllProducts();
    });
  }

  deleteProduct(): void {
    console.log('DELETE clicked');

    this.productService.deleteProduct(1).subscribe(() => {
      console.log('Product deleted');
      this.getAllProducts();
    });
  }
}