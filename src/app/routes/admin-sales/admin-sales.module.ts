import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSalesRoutingModule } from './admin-sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { SharedModule } from '@shared/shared.module';


const COMPONENTS: any[] = [SalesListComponent, NewSaleComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, AdminSalesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class AdminSalesModule { }
