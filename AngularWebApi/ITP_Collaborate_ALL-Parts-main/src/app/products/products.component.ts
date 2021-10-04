import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:any;
  constructor(private apiservices:ApiServicesService, private cartOperations:CartService) { }

  ngOnInit(): void {
    this.products=this.apiservices.getProducts()
    .subscribe(res=>{
      this.products=res; 
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });

      
    });// end of ngOnInit()
  }

 addItemIntoCart(product:any){
this.cartOperations.addtoCart(product);
 }

}
