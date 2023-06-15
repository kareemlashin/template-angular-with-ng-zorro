import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { View1Component } from './shared/views/view1/view1.component';
import { View2Component } from './shared/views/view2/view2.component';

const routes: Routes = [
  {
    path:'view1',
    component:View1Component,
    data:{
      title:'view1'
    }
  },
  {
    path:'view2',
    component:View2Component,
    data:{
      title:'view2'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
