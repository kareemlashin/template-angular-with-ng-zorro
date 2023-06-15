import { APP_INITIALIZER } from "@angular/core";
import { TitleTranslationProviderService } from "src/app/core/helpers/title-translation-provider.service";

export const providers=[
    TitleTranslationProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (myService: TitleTranslationProviderService) => () => TitleTranslationProviderService,
      deps: [TitleTranslationProviderService],
      multi: true,
    },
]