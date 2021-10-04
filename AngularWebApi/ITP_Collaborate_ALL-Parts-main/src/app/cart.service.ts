import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly APIUrl="http://localhost:5000/api";
public cartItemList:any=[];
public productList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

getProduct(){
  return this.productList.asObservable(); 
}
setProduct(product:any){
  this.cartItemList.push(...product);
  this.productList.next(product);
}

addtoCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
}

getTotalPrice():number{
  let gTotal=0;
  this.cartItemList.map((a:any)=>{
    gTotal+=a.total;
  }) 
  return gTotal;
}

removeItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id==a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}

removeallItem(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}

storeCartDetailstoDB(oid:string){
 
//  return this.http.post<any>(this.APIUrl+'/cartDetails',val1).subscribe(res=>{
//    alert(res);
//  });
  for (var i=0; i<this.cartItemList.length; i++) {
 
    var myJsonString = JSON.stringify(this.cartItemList[i]);
  
    var stringToJsonObject = JSON.parse(myJsonString);  
    var val1={
      itemName:JSON.stringify(stringToJsonObject['title']),
      itemDescription:JSON.stringify(stringToJsonObject['description']),
      unitPrice:JSON.stringify(stringToJsonObject['price']),
      totalPrice:JSON.stringify(stringToJsonObject['total']),
      orderId:oid,
      itemId:JSON.stringify(stringToJsonObject['id']),
      
    };
    
    this._callApiStoremethod(val1);
      }  
  // return this.http.post<any>(this.APIUrl+'/cartDetails',this.val1);
}

_callApiStoremethod(val:any){
 return this.http.post<any>(this.APIUrl+'/cartDetails',val).subscribe(res=>{
  console.log(res);
 });
}



}
