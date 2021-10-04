import { Component, OnInit,Input } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { ShippingdetailsService } from '../shippingdetails.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
  firstname:string="";
  lastname:string="";
  email:string="";
  contactno:string="";
  address:string="";
  error1:string="";
name:string='';
message:string='';

  constructor(private serv:ShippingdetailsService,private router: Router) { }
  @Input() sdetails:any;

  ngOnInit(): void {
    this.firstname=this.sdetails.firstname;
    this.lastname=this.sdetails.lastname;
    this.email=this.sdetails.email;
    this.contactno=this.sdetails.contactno;
    this.address=this.sdetails.address;
  }
  submitForm(){
    if ((this.firstname=="")||(this.lastname=="")||(this.email=="")||(this.contactno=="")||(this.address=="") ) {
      this.error1="All fields are required";
    }else{
      var val={
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        contactno:this.contactno,
        address:this.address,
      };

      this.router.navigate(['/payment']);
      this.serv.SaveTempShippingDetails(val);  
    }

  }
 
}
