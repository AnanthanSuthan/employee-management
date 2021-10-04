import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  public sdetails:any=[];
  public cartDetails:any=[];
  public orderid:string=";"
  public showoneorderstatus:boolean=false;
  public showallorderstatus:boolean=true;

  constructor(private apiSer:ApiServicesService,private router: Router) { }

  ngOnInit(): void {
    this.apiSer.getshippingDetailsfromDB().subscribe(res=>{
      this.sdetails=res;
    });
    

  }

  ViewOrder(orderid:any){
    this.showoneorderstatus=true;
    this.showallorderstatus=false;
    this.orderid=orderid;
    this.getCartDetails();
  }

  getCartDetails(){
    this.apiSer.getCartItemDetails(this.orderid).subscribe(res=>{
  this.cartDetails=res; 
  console.log(res);
    });
  }

  deleteCartItem(cartitemid:string){
    this.apiSer.removeCartItem(cartitemid).subscribe(res=>{
      this.openPopup();
    });
    // location.reload();
    this.getCartDetails();

  }

  RemoveOrder(orderid:string){
    this.apiSer.removeOrder(orderid).subscribe(res=>{
      this.openPopup();
      location.reload();
    });
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.router.navigate(['order-management']);
  // refresh page

 
  
  }



}
