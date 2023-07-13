import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageFactory } from './services/language-factory.service';
import { ALanguage } from './services/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odata-querybuilder';
  lg: ALanguage;

  constructor(private lFactory: LanguageFactory) {
    this.lg = lFactory.getLanguageService();
  }

  selectLang(lang: string) {
    if (lang == this.getLang()) return;
    localStorage.setItem("lang", lang);
    location.reload();
  }
  getLang() {
    return this.lFactory.language
  }
}
