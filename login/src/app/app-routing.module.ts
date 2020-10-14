import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPrimaryComponent } from './login-primary/login-primary.component';
import { AuthGuard} from './auth/auth.guard'


const routes: Routes = [
  { path: '', component: LoginPrimaryComponent},
  { path: 'login', component: LoginPrimaryComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
