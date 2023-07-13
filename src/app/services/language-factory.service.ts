import { Injectable } from '@angular/core';
import { EnLangauge } from './languages/en-language';
import { NlLangauge } from './languages/nl-language';
import { ALanguage } from './language';

@Injectable({
  providedIn: 'root'
})
export class LanguageFactory {
  readonly language: string;
  constructor() {
    this.language = localStorage.getItem("lang") ?? "en";
  }

  getLanguageService(): ALanguage {
    // get from cookie orso
    switch (this.language) {
      case "nl":
        return new NlLangauge();
      case "en":
        return new EnLangauge();
      default:
        return new EnLangauge();
    }
  }
}
