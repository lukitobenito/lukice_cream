import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { AkciaComponent } from './components/akcia/akcia.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'about', component:AboutComponent},
  {path:'pay',component:PayComponent},
  {path:'akcia', component:AkciaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
