import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {Route, RouterModule} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";
import {BookingsComponent} from "../bookings/bookings/bookings.component";
const routes:Route[]=[{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'bookings',
      component: BookingsComponent
    }
  ]
}];


@NgModule({
  declarations: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class LayoutModule { }
