import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:any[]=[]
  constructor(private _productsService:ProductsService,private _HttpClient:HttpClient){
    _productsService.getCategories().subscribe((categories)=>{
        console.log(categories.data)
      this.categories = categories.data
        
    })
  }

}
