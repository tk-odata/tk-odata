import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterObj } from '../filters/base-filter.directive';
import { CritObj } from '../filters/crit-filter/crit-filter.component';
import { CompObj } from '../filters/comp-filter/comp-filter.component';
import { ListObj } from '../filters/list-filter/list-filter.component';
import { NotObj } from '../filters/not-filter/not-filter.component';
import { ALanguage } from 'src/app/services/language';
import { LanguageFactory } from 'src/app/services/language-factory.service';

@Component({
  selector: 'app-add-filter',
  templateUrl: './add-filter.component.html',
  styleUrls: ['./add-filter.component.css']
})
export class AddFilterComponent implements OnInit {

  @Output() newFilter = new EventEmitter<FilterObj>();
  selectedFilter = "0";
  lg: ALanguage;

  constructor(lFactory: LanguageFactory) {
    this.lg = lFactory.getLanguageService();
  }
  ngOnInit(): void {
  }

  addFilter() {
    // read select
    let filterObj: FilterObj;
    switch (this.selectedFilter) {
      case "0":
        // and or 
        filterObj = new CompObj();
        filterObj.filter = FilterBuildType.comp
        break;
      case "1":
        // any all
        filterObj = new ListObj();
        filterObj.filter = FilterBuildType.list
        break;
      case "2":
        // criteria
        filterObj = new CritObj();
        filterObj.filter = FilterBuildType.crit
        break;
      case "3":
        // not
        filterObj = new NotObj();
        filterObj.filter = FilterBuildType.not
        break;
    }
    this.newFilter.emit(filterObj!);
  }

  selected(event: any) {
    this.selectedFilter = event.target.value;
  }

}

export enum FilterBuildType {
  comp = 1,
  list,
  crit,
  not
}