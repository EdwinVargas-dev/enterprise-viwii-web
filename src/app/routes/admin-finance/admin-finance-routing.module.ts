import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceResumeComponent } from './finance-resume/finance-resume.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { NewIncomeComponent } from './new-income/new-income.component';

const routes: Routes = [
  { path: 'finance-resume', component: FinanceResumeComponent },
  { path: 'new-income', component: NewIncomeComponent },
  { path: 'new-expense', component: NewExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFinanceRoutingModule { }
