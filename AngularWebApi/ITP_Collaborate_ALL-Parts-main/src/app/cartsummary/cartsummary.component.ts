import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {
  public itemsinCart:any=[];
  public gTotal:number=0;
    constructor(private cartSer:CartService) { }
  
    ngOnInit(): void {
      this.cartSer.getProduct()
      .subscribe(res=>{
        this.itemsinCart=res;
        this.gTotal=this.cartSer.getTotalPrice();
      }) 
    }
  
    removeItem(item:any){
      this.cartSer.removeItem(item);
    }
  
  }
  
