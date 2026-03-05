import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'en',
    }),
    provideTranslateHttpLoader({
      prefix: 'i18n/',
      suffix: '.json',
    }),
  ],
};
