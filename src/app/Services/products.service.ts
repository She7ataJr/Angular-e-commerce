import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }

  getProducts():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'products')
  }
  getOneProduct(productId:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`products/${productId}`)
  }
  getCategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'categories')
    
  }
  addProductToCart(productId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'cart',
    {
      "productId":productId
    },{
      headers:{
        token:localStorage.getItem('token')!
      }
    })
  }


  getCartProducts():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'cart',{
      headers:{
        token:localStorage.getItem('token')!
      }
    })
  }

  updateProductCount(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl+`cart/${productId}`,{'count':count},{headers:{'token':localStorage.getItem("token")!}})
  }

  removeCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+`cart/${productId}`,
    {
      headers:{'token':localStorage.getItem("token")!}
    })
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl+'cart',{
      headers:{
        'token':localStorage.getItem('token')!
      }
    })
  }
}
