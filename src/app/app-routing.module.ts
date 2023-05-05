import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDemoComponent } from './Componensts/Includes/request-demo/request-demo.component';
import { MainComponent } from './Componensts/Includes/main/main.component';
import { AboutComponent } from './Componensts/Includes/about/about.component';
import { OrgAuthComponent } from './Componensts/Includes/org-auth/org-auth.component';
import { DashboardComponent } from './Componensts/Dashboard/dashboard/dashboard.component';
import { TodayActionComponent } from './Componensts/Dashboard/today-action/today-action.component';
import { InqueryComponent } from './Componensts/Dashboard/inquery/inquery.component';
import { MemberComponent } from './Componensts/Dashboard/member/member.component';
import { PaymentComponent } from './Componensts/Dashboard/payment/payment.component';
import { AttendanceComponent } from './Componensts/Dashboard/attendance/attendance.component';
import { ExpencesComponent } from './Componensts/Dashboard/expences/expences.component';
import { StaffComponent } from './Componensts/Dashboard/staff/staff.component';
import { BulkSmsComponent } from './Componensts/Dashboard/bulk-sms/bulk-sms.component';
import { ExerciseComponent } from './Componensts/Dashboard/exercise/exercise.component';
import { SupplementSalesComponent } from './Componensts/Dashboard/supplement-sales/supplement-sales.component';
import { MachinesComponent } from './Componensts/Dashboard/machines/machines.component';
import { SalesHistoryComponent } from './Componensts/Dashboard/sales-history/sales-history.component';


const routes: Routes = [
  { path:'main',component:MainComponent},
  { path:'login',component:OrgAuthComponent},
  { path:'demo',component:RequestDemoComponent},
  { path:'about',component:AboutComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard',component:DashboardComponent},
  {path:'todayaction',component:TodayActionComponent},
  {path:'inquiry',component:InqueryComponent},
  {path:'member',component:MemberComponent},
  {path:'payment',component:PaymentComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'expences',component:ExpencesComponent},
  {path:'staff',component:StaffComponent},
  {path:'bulksms',component:BulkSmsComponent},
  {path:'exercise',component:ExerciseComponent},
  {path:'supplementsales',component:SupplementSalesComponent},
  {path:'machine',component:MachinesComponent},
  {path:'saleshistory',component:SalesHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
