import { Observable, map } from 'rxjs';

import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../enums/localStorage';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationUtilsService {
  // get current Language on local Storage
  public language: string = localStorage.getItem(LOCAL_STORAGE.LANG) || 'ar';

  constructor(private _translate: TranslateService) {
    this._translate.use(this.language);
  }
  /**
  * Change the current language.
  */
  public use(lang: string): Observable<any> {
    return this._translate.use(lang);
  }
  /**
   * Set the default language.
   */
  public useLanguage(language: string = this.language): void {
    this._translate.use(language);
  }
  /**
   * Get an observable that emits the current language whenever it changes.
   */
  public onChange(): Observable<any> {
    return this._translate.onLangChange;
  }
  /**
   * Get a current Language
   */
  public currentLanguage() {
    return this._translate.currentLang;
  }
  /**
   * Get an instant translation for a given key.
   */
  public getTranslation(key: string): Observable<any> {
    if(key){
      return this._translate.get(key);
    }
    return EMPTY
  }
  /**
   * Get an observable that emits the current language whenever it changes.
   */
  public onLanguageChange(): Observable<string> {
    return this._translate.onLangChange.pipe(map((event) => event.lang));
  }
  /**
   * Get the current language.
   */
  public getCurrentLanguage(): string {
    return this._translate.currentLang;
  }
}
