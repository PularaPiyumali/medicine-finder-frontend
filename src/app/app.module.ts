import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './layouts/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './layouts/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidebarCustomerComponent } from './sidebar-customer/sidebar-customer.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    CustomerLayoutComponent,
    SidebarCustomerComponent,
    PharmacyDetailsComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
