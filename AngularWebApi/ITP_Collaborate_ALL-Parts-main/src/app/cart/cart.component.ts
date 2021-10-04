import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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
