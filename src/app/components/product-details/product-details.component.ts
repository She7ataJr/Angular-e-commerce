import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string = ''
  productDetails:any
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){}
  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId=params.get('id') || ""
      this._ProductsService.getOneProduct(this.productId).subscribe((product)=>{
        console.log(product.data);
        this.productDetails=product.data
      })
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true

  }
  addProductToCart(productId:string){
    this._ProductsService.addProductToCart(productId).subscribe((response)=>console.log(response)
    )
  }
}
