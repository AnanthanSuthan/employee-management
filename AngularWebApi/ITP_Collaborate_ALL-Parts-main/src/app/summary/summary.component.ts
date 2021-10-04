import { Component, OnInit } from '@angular/core';
import { ShippingdetailsService } from '../shippingdetails.service';
import {Router} from "@angular/router"
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public firstname:string="";
  public lastname:string="";
  public email:string="";
  public contactno:string="";
  public address:string="";
  public oid:string="";

  constructor(private shippingdetailsservice:ShippingdetailsService,private router: Router, private cartDetailsSer:CartService) { }

  ngOnInit(): void {
    this.shippingdetailsservice.getshiipingDetails()
    .subscribe(res=>{
      this.firstname=res.firstname;
      this.lastname=res.lastname;
      this.email=res.email;
      this.contactno=res.contactno;
      this.address=res.address;
    }) 
    
  }


  
  changeaddress(){
    this.router.navigate(['/shippingDetails']);
  }

  storeshippingDataandCartData(){
    // generating order id with date and time
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    const currentMin=currentDate.getMinutes();
    const currentSecond=currentDate.getSeconds();

    this.oid="DI-"+currentMonth+currentYear+currentMin+currentSecond;
    var val={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      contactno:this.contactno,
      address:this.address,
      orderid:this.oid
    };
     this.storeCartDetails(this.oid);
    return this.shippingdetailsservice.addshippingDetails(val).subscribe(res=>{
      console.log(res);
    });

    
  }

  storeCartDetails(oid:string){
    
 this.cartDetailsSer.storeCartDetailstoDB(oid);
    // return this.cartDetailsSer.storeCartDetailstoDB().subscribe(res=>{
    //   alert(res);
    // });
    this.openPopup();
  }


  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
   this.router.navigate(['/']);
  // refresh page

 
  
  }

   
 
}
