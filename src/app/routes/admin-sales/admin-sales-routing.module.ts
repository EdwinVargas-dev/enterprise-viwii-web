import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { SalesListComponent } from './sales-list/sales-list.component';

const routes: Routes = [
  { path: 'sales-list', component: SalesListComponent },
  { path: 'new-sale', component: NewSaleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSalesRoutingModule { }
