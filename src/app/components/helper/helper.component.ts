import { Component } from '@angular/core';
import { ALanguage } from 'src/app/services/language';
import { LanguageFactory } from 'src/app/services/language-factory.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent {
  lg: ALanguage;
  constructor(private lFactory: LanguageFactory) {
    this.lg = lFactory.getLanguageService();
  }
}
