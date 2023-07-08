import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string='https://route-ecommerce.onrender.com/api/v1/'
  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }

  getProducts():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'products')
  }

}
