import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  clickSetTimeOut:any
  cartProducts:any[]=[]
  constructor(private _productsService:ProductsService){}

  ngOnInit():void{
    this._productsService.getCartProducts().subscribe({
      next:(value :any)=> {
            console.log(value)
          this.cartProducts=value.data.products;
        },
        error:(err)=>{
          console.log(err);
          
        },
        complete:()=> {
          
        }
      }
    )
  }

  updateProductCount(productId:string,count:number){
    clearTimeout(this.clickSetTimeOut)
    this.clickSetTimeOut=setTimeout(()=>{
      if(count==0){
      this.removeCartItem(productId)
      }else{

        this._productsService.updateProductCount(productId,count).subscribe((response)=>{
          this.cartProducts=response.data.products;
          console.log(response)
    
        })

      }

    },500)
  }

  removeCartItem(productId:string){
    this._productsService.removeCartItem(productId).subscribe((response)=>{
     
      this.cartProducts=response.data.products;
      this._productsService.numOfCartItems.next(response.numOfCartItems)
    })
  }
  
  deleteAll(){
    this._productsService.clearCart().subscribe((response)=>{
      this.cartProducts=response.data
      this._productsService.numOfCartItems.next(0)

      console.log(response);
      
    })
  }

}
