import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./autentication/login/login.component";


const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'application',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
