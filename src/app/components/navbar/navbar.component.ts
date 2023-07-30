import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  numOfCartItems:number=0
  constructor(public _AuthService:AuthService, private _productService:ProductsService){
    _productService.numOfCartItems.subscribe({
      next:(value)=>{
        console.log(value);
        
        this.numOfCartItems=value    
      }
    })
  }

  
}
