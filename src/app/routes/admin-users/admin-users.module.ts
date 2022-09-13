import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminUsersRoutingModule } from './admin-users-routing.module';

import { NewUserComponent } from './new-user/new-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const COMPONENTS: any[] = [UsersListComponent, NewUserComponent, EditUserComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, AdminUsersRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class AdminUsersModule { }
