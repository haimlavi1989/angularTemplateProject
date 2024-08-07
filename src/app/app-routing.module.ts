import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { AuthGuard } from "./feature/auth/auth.guard";
import {HomeComponent} from "./feature/home/home.component";

const usersModule = () => import('./feature/users/users.module').then(x => x.UsersModule);

 const routes: Routes = [
    { path : 'login', component : LoginComponent },
    { path : 'register', component : RegisterComponent },
    //{ path : 'home', component : HomeComponent, canActivate: [AuthGuard]},
    { path : 'home', component : HomeComponent },
    //  Graphs was set as "lazy loading" Assuming that this is not a key component of the system.
    // {
    //   path: 'graphs',
    //   loadChildren: () => import('./feature/name/name.module').then(m => m.nameModule)
    // },
    { path: 'users', loadChildren: usersModule },
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
