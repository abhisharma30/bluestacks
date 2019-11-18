import { Component } from '@angular/core';
import { AppService } from './app.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  type: string;
  constructor(private translate: TranslateService, private appService: AppService) {
    translate.setDefaultLang('en');
    this.appService.type.subscribe((newType: string) => { 
      this.type = newType;
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}