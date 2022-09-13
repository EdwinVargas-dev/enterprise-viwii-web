import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFinanceRoutingModule } from './admin-finance-routing.module';
import { FinanceResumeComponent } from './finance-resume/finance-resume.component';
import { NewIncomeComponent } from './new-income/new-income.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { SharedModule } from '@shared/shared.module';


const COMPONENTS: any[] = [FinanceResumeComponent, NewIncomeComponent, NewExpenseComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, AdminFinanceRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class AdminFinanceModule { }
