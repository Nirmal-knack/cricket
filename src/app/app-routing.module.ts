import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavtoolComponent } from './navtool/navtool.component';
import { ScorerComponent } from './scorer/scorer.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  {path:'navtool', component: NavtoolComponent},
  {path:'scorer', component: ScorerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
