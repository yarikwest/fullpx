import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CabinetLayoutComponent} from './components/cabinet-layout/cabinet-layout.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {DashboardPageComponent} from '../dashboard-page/dashboard-page.component';
import {UploadPageComponent} from '../upload-page/upload-page.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthGuard} from './services/auth.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: CabinetLayoutComponent, children: [
          {path: '', redirectTo: '/cabinet/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'upload', component: UploadPageComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: [
    CabinetLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    UploadPageComponent
  ]
})
export class CabinetModule {

}
