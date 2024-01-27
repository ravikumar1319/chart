import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { SuccessComponent } from './pages/success/success.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';

const route: Route[] = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'form',
  component: FormComponent
}, {
  path: 'form-submitted',
  component: SuccessComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SuccessComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    RouterModule.forRoot(route),
    MatInputModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
