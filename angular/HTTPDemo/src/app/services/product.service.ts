import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // GET: Fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // POST: Add a new product
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // PUT: Update an existing product
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  // DELETE: Remove a product by ID
  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
