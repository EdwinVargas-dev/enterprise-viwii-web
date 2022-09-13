import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDeliveryRoutingModule } from './admin-delivery-routing.module';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';
import { SharedModule } from '@shared/shared.module';


const COMPONENTS: any[] = [DeliveryListComponent, NewDeliveryComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, AdminDeliveryRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class AdminDeliveryModule { }
