import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { PharmacyRegistrationComponent } from './pharmacy-registration/pharmacy-registration.component';
import { MapsComponent } from './maps/maps.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: 'dashboard'
    },
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    data: {
      title: 'dashboard'
    },
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin/pharmacy-registration',
    component: PharmacyRegistrationComponent,
    data: {
      title: 'Pharmacy Registration Page'
    }
  },
  { path: 'admin/add-pharmacy',  
    component: MapsComponent,
    data: {
      title: 'Add Location Page'
    }
   },
   { path: 'verify-email',  
    component: VerifyEmailComponent,
    data: {
      title: 'Add Location Page'
    }
   },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
