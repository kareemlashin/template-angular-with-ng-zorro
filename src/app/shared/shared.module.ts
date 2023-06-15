import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WrapTranslateComponent } from './components/wrap-translate/wrap-translate.component';
import { ZorroModule } from '../core/zorro.module';

const WRAP_DECLARE = [WrapTranslateComponent];
const EXPORTS = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ZorroModule,

];
@NgModule({
  declarations: [...WRAP_DECLARE],
  imports: [
    CommonModule,
    ...EXPORTS
  ],
  exports: [
    ...EXPORTS,
    ...WRAP_DECLARE,
  ]
})
export class SharedModule { }
