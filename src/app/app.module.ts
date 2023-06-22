import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { RequestDemoComponent } from './Componensts/public-auth/Pages/request-demo/request-demo.component';
import { HeaderComponent } from './Componensts/public-auth/Pages/header/header.component';
import { FooterComponent } from './Componensts/public-auth/Pages/footer/footer.component';
import { OrgAuthComponent } from './Componensts/public-auth/Pages/org-auth/org-auth.component';
import { MainComponent } from './Componensts/public-auth/Pages/main/main.component';
import { AboutComponent } from './Componensts/public-auth/Pages/about/about.component';
import { SidenavComponent } from './Componensts/Dashboard/sidenav/sidenav.component';
import { MemberComponent } from './Componensts/Dashboard/member/member.component';
import { BodyComponent } from './Componensts/Dashboard/body/body.component';
import { DashboardComponent } from './Componensts/Dashboard/dashboard/dashboard.component';
import { TodayActionComponent } from './Componensts/Dashboard/today-action/today-action.component';
import { InqueryComponent } from './Componensts/Dashboard/inquery/inquery.component';
import { PaymentComponent } from './Componensts/Dashboard/payment/payment.component';
import { AttendanceComponent } from './Componensts/Dashboard/attendance/attendance.component';
import { ExpencesComponent } from './Componensts/Dashboard/expences/expences.component';
import { StaffComponent } from './Componensts/Dashboard/staff/staff.component';
import { BulkSmsComponent } from './Componensts/Dashboard/bulk-sms/bulk-sms.component';
import { ExerciseComponent } from './Componensts/Dashboard/exercise/exercise.component';
import { SupplementSalesComponent } from './Componensts/Dashboard/supplement-sales/supplement-sales.component';
import { MachinesComponent } from './Componensts/Dashboard/machines/machines.component';
import { SalesHistoryComponent } from './Componensts/Dashboard/sales-history/sales-history.component';
import { SublevelMenuComponent } from './Componensts/Dashboard/sidenav/sublevel-menu.component';
import { DHeaderComponent } from './Componensts/Dashboard/d-header/d-header.component';

import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { publicAuthModule } from './Componensts/public-auth/public-auth.module';








@NgModule({
  declarations: [
    AppComponent,
    RequestDemoComponent,
    HeaderComponent,
    FooterComponent,
    OrgAuthComponent,
    MainComponent,
    AboutComponent,
    SidenavComponent,
    MemberComponent,
    BodyComponent,
    DashboardComponent,
    TodayActionComponent,
    InqueryComponent,
    PaymentComponent,
    AttendanceComponent,
    ExpencesComponent,
    StaffComponent,
    BulkSmsComponent,
    ExerciseComponent,
    SupplementSalesComponent,
    MachinesComponent,
    SalesHistoryComponent,
    SublevelMenuComponent,
    DHeaderComponent

  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    CdkMenuModule,
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    publicAuthModule

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
