import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class ShippingdetailsService {
  readonly APIUrl="http://localhost:5000/api";
  public firstname:string="";
  public lastname:string="";
  public email:string="";
  public contactno:string="";
  public address:string="";

  public shippingDetailsSet=new BehaviorSubject<any>([]);
  
  
  constructor(private http:HttpClient) { }
  addshippingDetails(val:any){
    this.firstname=val.firstname;
    this.lastname=val.lastname;
    this.email=val.email;
    this.contactno=val.contactno;
    this.address=val.address;
    // testing 
    this.shippingDetailsSet.next(val);

    return this.http.post<any>(this.APIUrl+'/shippingDetails',val);

  }

  SaveTempShippingDetails(val:any){
    this.firstname=val.firstname;
    this.lastname=val.lastname;
    this.email=val.email;
    this.contactno=val.contactno;
    this.address=val.address;
    // testing 
    this.shippingDetailsSet.next(val);

 
  }

  getshiipingDetails(){
    var val={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      contactno:this.contactno,
      address:this.address,
    };
    return this.shippingDetailsSet.asObservable(); 
  }


  getShippingDetailsfromDB(){
    return this.http.get<any>(this.APIUrl+'/shippingDetails');
  }
}
