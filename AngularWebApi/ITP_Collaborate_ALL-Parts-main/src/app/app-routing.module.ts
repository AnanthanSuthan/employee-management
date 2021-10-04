import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryRatesComponent } from './delivery-rates/delivery-rates.component';
import { ExpressDeliveryComponent } from './express-delivery/express-delivery.component';


import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeComponent } from './empcontent/employee/employee.component';
import { ShowEmpComponent } from './empcontent/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './empcontent/employee/add-edit-emp/add-edit-emp.component';
import { EmpcontentComponent } from './empcontent/empcontent.component';
import { DepartmentComponent } from './empcontent/department/department.component';
import { EmployeedashboardComponent } from './empcontent/employeedashboard/employeedashboard.component';
import { DeliveryProductDetailsComponent } from './delivery-product-details/delivery-product-details.component';
import { PromotiondashbordComponent } from './promotiondashbord/promotiondashbord.component';
import { GiftComponent } from './promotiondashbord/gift/gift.component';
import { PaymentComponent } from './promotiondashbord/payment/payment.component';
import { PromotionComponent } from './promotiondashbord/promotion/promotion.component';
import { PromotionFormComponent } from './promotiondashbord/promotion/promotion-form/promotion-form.component';
import { VoucherComponent } from './promotiondashbord/voucher/voucher.component';
import { VoucherFormComponent } from './promotiondashbord/voucher/voucher-form/voucher-form.component';
import { CartComponent } from './cart/cart.component';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {
    path:'product',
    component:ProductComponent
  },{
    path:'shippingDetails',
    component:ShippingDetailsComponent
  },{
    path:'summary',
    component:SummaryComponent
  },{
    path:'order-management',
    component:OrderManagementComponent
  }
  ,{
    path:'vieworder',
    component:ViewOrderComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  //rubitha
  {path:'promodashbord',component:PromotiondashbordComponent,
  children:[
    {path:'gift', component:GiftComponent},
    {path:'payment', component:PaymentComponent},
    {path:'promotion', component:PromotionComponent},
    {path:'voucher', component:VoucherComponent}
  ]},
  {path:'promotion', component:PromotionComponent,
  children:[
    {path:'promotionform', component:PromotionFormComponent},
  ]},
  {path:'voucher', component:VoucherComponent,
  children:[
    {path:'voucherform', component:VoucherFormComponent}

  ]},
  //ananthan
  {path:'homepage',component:HomePageComponent},
  {path:'empcontent',component:EmpcontentComponent,
   children:[

    {path:'employee',component:EmployeeComponent},
    {path:'department',component:DepartmentComponent},
    {path:'empDashboard',component:EmployeedashboardComponent},
  ]},

  {path:'employee',component:EmployeeComponent,
  children:[

    {path:'app-show-dep',component:ShowEmpComponent},
    {path:'app-add-edit-dep',component:AddEditEmpComponent},
  ]},

  {path:'department',component:DepartmentComponent,
  children:[

    {path:'app-show-emp',component:ShowEmpComponent},
    {path:'app-add-edit-emp',component:AddEditEmpComponent},
  ]},




//aathif

  {path:'order-item', component:OrderItemsComponent},
  {path:'orders',component:OrdersComponent},
  {
    path:'dashboard', 
    component:DashboardComponent,
    children:[
     {path:'express', component:ExpressDeliveryComponent},
     {path:'deliveryRates',component:DeliveryRatesComponent},
     {path:'deliveryDetails',component:DeliveryProductDetailsComponent},
   
    //  {path:'order',
    //   component:OrderComponent,
    //   children:[
    //     {path:'',component:OrderComponent},  
    //     {path:'edit/:id',component:OrderComponent}
    //   ]}
    {path:'order',children:[
      {path:'',component:OrderComponent},  
      {path:'edit/:id',component:OrderComponent},
   
  
    ]}
  

    
    ]
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
