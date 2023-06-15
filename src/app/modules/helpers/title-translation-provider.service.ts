import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUtilsService } from './translate.service';

@Injectable({
  providedIn: 'root',
})
export class TitleTranslationProviderService {
  // urls
  url: any = [];
  constructor(
    private router: Router,
    private title: Title,
    private translationUtils: TranslationUtilsService
  ) {
    /* on router change title
    -------------------------------------------------- */
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((data: any) => {
        let _url = data.url.split('/');
        this.url = _url;
        this.onchange(_url);
      });
    /* End of on router  title
    -------------------------------------------------- */

    /* on language change title
    -------------------------------------------------- */
    translationUtils.onLanguageChange().subscribe((res) => {
      this.onchange(this.url);
    });
    /* End of on language  
    -------------------------------------------------- */
  }
  /** 
   * ! onchange(url)
   * @param {url} 
   * * and change title
   */
  onchange(url: any) {
    this.translationUtils
      .getTranslation(url[url.length - 1])
      .subscribe((res) => {
        this.title.setTitle(res);
      });
  }
}
