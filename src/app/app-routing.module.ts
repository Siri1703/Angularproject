import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteguardGuard } from './deleteguard.guard';
import { DisplayComponent } from './display/display.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { MainhComponent } from './mainh/mainh.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'practicecomponent', component: PracticeComponent },
{ path: 'homecomponent', component: HomeComponent},
{ path: 'appcomponent', component: AppComponent },
{ path: 'displaycomponent', component: DisplayComponent ,canActivate:[GuardGuard]},
{ path: 'appcomponent', component: AppComponent},
{ path: 'mainhcomponent', component: MainhComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
