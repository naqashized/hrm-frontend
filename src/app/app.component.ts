import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(translate: TranslateService, private router: Router, @Inject(LOCAL_STORAGE) public local: WebStorageService) {

    if(this.local.get('token') == undefined){
      this.router.navigate ( [ '/authentication/signin' ] );
    }

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
