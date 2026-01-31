import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product';
 
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit{
 
  product: any; // single product to be loaded
 
  constructor(private route: ActivatedRoute, private productService: ProductService){}
 
  ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   this.product = this.productService.getProductById(id);
  }
 
}
 