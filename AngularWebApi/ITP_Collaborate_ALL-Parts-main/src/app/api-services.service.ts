import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://fakestoreapi.com/products/category/electronics')
   .pipe(map((res:any)=>{
     return res;
   }))
  }


  addshippingDetails(val:any){
    return this.http.post<any>(this.APIUrl+'/shippingDetails',val);
  }

  getshippingDetailsfromDB(){
    return this.http.get<any>(this.APIUrl+'/shippingDetails');
  }

  getCartItemDetails(orderid:string){
    return this.http.get<any>(this.APIUrl+'/cartDetails/'+orderid);
  }

  removeCartItem(cartitemid:string){
    return this.http.delete<any>(this.APIUrl+'/cartDetails/'+cartitemid);
  }

  removeOrder(orderid:string){
    return this.http.delete<any>(this.APIUrl+'/shippingDetails/'+orderid);
  }
}
