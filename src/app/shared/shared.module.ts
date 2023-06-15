import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WrapTranslateComponent } from './components/wrap-translate/wrap-translate.component';
import { View1Component } from './views/view1/view1.component';
import { View2Component } from './views/view2/view2.component';

const WRAP_DECLARE = [WrapTranslateComponent];
@NgModule({
  declarations: [WRAP_DECLARE, View1Component, View2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    WRAP_DECLARE,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
