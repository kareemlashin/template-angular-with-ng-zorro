import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TitleTranslationProviderService } from './modules/helpers/title-translation-provider.service';
import { WrapTranslateComponent } from './shared/components/wrap-translate/wrap-translate.component';
import { translateConfigModule } from './core/Translate.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    translateConfigModule,
    SharedModule
  ],
  providers: [TitleTranslationProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (myService: TitleTranslationProviderService) => () => TitleTranslationProviderService,
      deps: [TitleTranslationProviderService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
