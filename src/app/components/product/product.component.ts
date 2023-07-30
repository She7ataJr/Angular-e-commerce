import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product :any

  constructor(private _productsService:ProductsService,){}

  addProduct(productId:string){
    this._productsService.addProductToCart(productId).subscribe((response)=>{
      console.log(response)
      this._productsService.numOfCartItems.next(response.numOfCartItems)
    }
    )
  }
}
