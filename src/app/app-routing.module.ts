import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StComponent } from './st/st.component';
import { TeComponent } from './te/te.component';

const routes: Routes = [
  {
    path:'te',component:TeComponent
  },
{path:'st',component:StComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[TeComponent,StComponent]
