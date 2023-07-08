import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any [] = []
  constructor(private _AuthService:AuthService,private _Router:Router, private _ProductsService:ProductsService){
    if(localStorage.getItem('token') == null){
      _Router.navigate(['/login'])
    }
    _ProductsService.getProducts().subscribe( (products)=>{
      this.products = products.data
      console.log(products);
      
    })
  }

}
