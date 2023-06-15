import { Component, Input } from '@angular/core';

import { TranslationUtilsService } from 'src/app/modules/helpers/translate.service';

@Component({
  selector: 'app-wrap-translate',
  templateUrl: './wrap-translate.component.html',
  styleUrls: ['./wrap-translate.component.scss']
})
export class WrapTranslateComponent {
  /**
  * this component is used to set value related to language
  * when ar is selected set ar
  * when en is selected set en
  */
  @Input() ar: any = '';
  @Input() en: any = '';
  /*=============================================
  =               current Language              =
  =============================================*/
  lang: any = this._TranslatesService.currentLanguage()

  /*=========  End of current Language  ==========*/
  constructor(private _TranslatesService: TranslationUtilsService) {

  }
  ngOnInit(): void {
    this.onchange()
  }
  ars(){
    this._TranslatesService.use('ar');

  }
  ens(){
    this._TranslatesService.use('en');

  }
  /* onchange
  -------------------------------------------------- */
  onchange() {
    this._TranslatesService.onChange().subscribe((res) => {
      this.lang = res.lang;
    })
  }
  /* End of onchange
  -------------------------------------------------- */

  /* get translate from current
  -------------------------------------------------- */

  getKey(key: string) {
    this._TranslatesService.getTranslation(key).subscribe((res) => {
      console.log(res)
    })
  }
  /* End of get translate from 
  -------------------------------------------------- */

}
