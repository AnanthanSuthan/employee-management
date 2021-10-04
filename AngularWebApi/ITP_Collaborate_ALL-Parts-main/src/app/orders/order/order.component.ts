import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderService } from 'src/app/shared/order.service';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerList: Customer[];
  isValid:boolean=true;

  constructor(public service:OrderService,
    private dialog:MatDialog,
    private customerService: CustomerService,
    private toastr:ToastrService,
    private router:Router,
    private currentRoute:ActivatedRoute){ }
    

  

  ngOnInit(): void {

    this.resetForm();
    let orderID = this.currentRoute.snapshot.paramMap.get('id');
    if(orderID==null)
    this.resetForm();
    else{
      this.service.getOrderByID(parseInt(orderID)).then(res=>{
        this.service.formData=res.order;
        this.service.orderItems = res.orderDetails;  
      });
    }
       

    this.customerService.getCustomerList().then(res=>this.customerList=res as Customer[]);
  }

  resetForm(form?: NgForm) {
    if (form = null as any)
      this.resetForm();
    this.service.formData = {
      OrderID:null,
      OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      CustomerID: 0,
      PMethod: '',
      GTotal: 0,
      DeletedOrderItemIDs: ''
    
    };
    this.service.orderItems=[];
    
  }

  AddOrEditOrderItem(orderItemsIndex: any, OrderID: any){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%"
    dialogConfig.data={orderItemsIndex,OrderID};
      this.dialog.open(OrderItemsComponent,dialogConfig).afterClosed().subscribe(res=>{
        this.updateGrandTotal();
      });
  }
  
  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null)
    this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
    this.service.orderItems.splice(i, 1);
    this.updateGrandTotal();
    
  } 

  updateGrandTotal() {
    this.service.formData.GTotal = this.service.orderItems.reduce((prev, curr) => {
      return prev + curr.Total;
    }, 0);
    this.service.formData.GTotal = parseFloat(this.service.formData.GTotal.toFixed(2));
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerID == 0)
      this.isValid = false;
    else if (this.service.orderItems.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm())
    {
      this.service.saveOrUpdateOrder().subscribe(res=>{
        this.resetForm();
        this.toastr.success('Submitted Successfully!','Delivery Service.');
        this.router.navigate(['/orders']);
      })
      
    }
}



}