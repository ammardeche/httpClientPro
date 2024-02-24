import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProducts } from '../model/products';
import { Observable, catchError, map, throwError } from 'rxjs';
import { error } from 'console';
import { ICategory } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  apiUrl = "https://api.escuelajs.co/api/v1/products"; 
  apiCategory = "https://api.escuelajs.co/api/v1/categories"; 

  constructor( private http : HttpClient) {}

  getAllProducts() : Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.apiUrl); 
  }

  getCategoryData():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.apiCategory);  
  }

  // getProductById(productId: number): Observable<IProducts> {
  //   return this.http.get<IProducts>(`${this.apiUrl}/${productId}`);
  // }

  getProductById( productId: any ): Observable<IProducts> {
        return this.http.get<IProducts>(`${this.apiUrl}/${productId}`); 
  }

  // update product
  updateProduct( product : IProducts ) : Observable<IProducts>{
      const apiUpd = `${this.apiUrl}/${product.id}`
      return this.http.put<IProducts>(apiUpd , product);
  }

  // delete product 
  
  deleteProduct( productId : number ){
        const apiUrl = `${this.apiUrl}/${productId}`
        return this.http.delete<IProducts>(apiUrl); 
  }

}
