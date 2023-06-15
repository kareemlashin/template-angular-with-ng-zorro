import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, ar_EG, en_US } from 'ng-zorro-antd/i18n';

import { BidiModule } from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import ar from '@angular/common/locales/ar';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

const ngZorroModules = [
  NzIconModule,
  NzModalModule,
  NzToolTipModule,
  NzGridModule,
  NzSelectModule,
  NzButtonModule,
  NzMenuModule,
  NzPopoverModule,
  NzAffixModule,
  NzAnchorModule,
  NzDividerModule
];

registerLocaleData(en);
registerLocaleData(ar);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BidiModule,
    ...ngZorroModules

  ],
  exports:[    ...ngZorroModules
  ],
  providers:[
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_I18N, useValue: ar_EG },
    
  ]
})
export class ZorroModule { }
