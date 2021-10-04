import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItemsComponent } from './orders/order-items/order-items.component';

import { HomeContentComponent } from './home-content/home-content.component';
import { HttpClientModule } from '@angular/common/http';


import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { Component} from '@angular/core';




import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpressDeliveryComponent } from './express-delivery/express-delivery.component';
import { DeliveryRatesComponent } from './delivery-rates/delivery-rates.component';
import { EmpcontentComponent } from './empcontent/empcontent.component';
import { EmployeeComponent } from './empcontent/employee/employee.component';
import { ShowEmpComponent } from './empcontent/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './empcontent/employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { DepartmentComponent } from './empcontent/department/department.component';
import { ShowDepComponent } from './empcontent/department/show-dep/show-dep.component';
import { AddEditDepComponent } from './empcontent/department/add-edit-dep/add-edit-dep.component';
import { EmployeedashboardComponent } from './empcontent/employeedashboard/employeedashboard.component';
import { DeliveryProductDetailsComponent } from './delivery-product-details/delivery-product-details.component';
import { PromotiondashbordComponent } from './promotiondashbord/promotiondashbord.component';
import { GiftComponent } from './promotiondashbord/gift/gift.component';
import { PaymentComponent } from './promotiondashbord/payment/payment.component';
import { PromotionComponent } from './promotiondashbord/promotion/promotion.component';
import { PromotionFormComponent } from './promotiondashbord/promotion/promotion-form/promotion-form.component';
import { VoucherComponent } from './promotiondashbord/voucher/voucher.component';
import { VoucherFormComponent } from './promotiondashbord/voucher/voucher-form/voucher-form.component';










@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrdersComponent,
    OrderItemsComponent,
    DashboardComponent,
    HomeContentComponent,
    ExpressDeliveryComponent ,
    DeliveryRatesComponent,
    EmpcontentComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeedashboardComponent,
    DeliveryProductDetailsComponent,
    PromotiondashbordComponent,
    GiftComponent,
    PaymentComponent,
    PromotionComponent,
    PromotionFormComponent,
    VoucherComponent,
    VoucherFormComponent,
    CartComponent,
    ProductsComponent,
    ProductComponent,
    ShippingDetailsComponent,
    SummaryComponent,
    ViewOrderComponent,
    OrderManagementComponent,
    CartsummaryComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),



    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgbModule,
   
















  ],
  entryComponents:[OrderItemsComponent],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
