import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';

const routes: Routes = [
  { path: 'delivery-list', component: DeliveryListComponent },
  { path: 'new-delivery', component: NewDeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDeliveryRoutingModule { }
