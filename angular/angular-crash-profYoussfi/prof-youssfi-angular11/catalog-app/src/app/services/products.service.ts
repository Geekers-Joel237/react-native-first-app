import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { IProduct } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private  http: HttpClient) { }

  getAllProducts():Observable<IProduct[]>{
    let host = environment.host;
    return this.http.get<IProduct[]>(host+"/products");

  }

  getSelectedProducts():Observable<IProduct[]>{
    let host = environment.host;
    return this.http.get<IProduct[]>(host+"/products?selected=true");

  }

  getAvailableProducts():Observable<IProduct[]>{
    let host = environment.host;
    return this.http.get<IProduct[]>(host+"/products?available=true");

  }

  searchProducts(keyword:string):Observable<IProduct[]>{
    let host = environment.host;
    return this.http.get<IProduct[]>(host+"/products?name_like="+keyword);

  }

  select(product:IProduct):Observable<IProduct>{
    let host = environment.host;
    product.selected = !product.selected;
    return this.http.put<IProduct>(host+"/products/"+product.id,product);
  }

  deleteProduct(product:IProduct):Observable<boolean>{
    let host = environment.host;
    return this.http.delete<boolean>(host+"/products/"+product.id);
  }

  saveProduct(product:IProduct):Observable<IProduct>{
    let host = environment.host;
    return this.http.post<IProduct>(host+"/products",product);
  }

  getProduct(id:number):Observable<IProduct>{
    let host = environment.host;
    return this.http.get<IProduct>(host+"/products/"+id);

  }

  updateProduct(product:IProduct):Observable<IProduct>{
    let host = environment.host;
    return this.http.put<IProduct>(host+"/products/"+product.id,product);
  }
}
