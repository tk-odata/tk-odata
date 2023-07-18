import { Component, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { Filter, AndFilter, OrFilter } from 'src/app/services/query-generator/filters';
import { ALanguage } from 'src/app/services/language';
import { LanguageFactory } from 'src/app/services/language-factory.service';
import { FilterBuildType } from '../../add-filter/add-filter.component';

export class CompObj extends FilterObj {
  override createFilter(): Filter | null {
    if (this.filterObjects.length == 0) return null;
    let filters: Filter[] = [];
    for (let f of this.filterObjects) {
      let foFilter = f.createFilter();
      if (foFilter != null) {
        filters.push(foFilter)
      }
    }
    if (filters.length == 0) {
      return null;
    } else if (filters.length == 1) {
      return filters[0];
    }

    if (this.type == "AND") {
      return new AndFilter(filters);
    } else {
      return new OrFilter(filters);
    }
  }

  filterObjects: FilterObj[] = []
  type: string = "AND";
}

@Component({
  selector: 'app-comp-filter',
  templateUrl: './comp-filter.component.html',
  styleUrls: ['./comp-filter.component.css']
})
export class CompFilterComponent extends BaseFilterDirective<CompObj> implements OnInit {
  lg: ALanguage;
  options: { val: string; label: string; }[];

  constructor(lFactory: LanguageFactory) {
    super();
    this.lg = lFactory.getLanguageService();

    this.options = [
      { val: "AND", label: this.lg.compAND },
      { val: "OR", label: this.lg.compOR },
    ]
  }
  ngOnInit(): void {
  }

  alterFilterObj(filter: FilterObj, replaceFilter?: FilterObj) {
    // if remove action, else do replace action
    if (replaceFilter == undefined) {
      if (filter.filter == FilterBuildType.comp) {
        let compFilter = filter as CompObj;
        // filter is comp and it only has 1 item remove the surrounding filter
        let filterindex = this.filterObj.filterObjects.indexOf(filter)
        if (compFilter.filterObjects.length == 1) {
          this.filterObj.filterObjects[filterindex] = compFilter.filterObjects[0];
          return;
        }
      }
      // remove it from the list disregarding nested filters
      this.filterObj.filterObjects.splice(this.filterObj.filterObjects.indexOf(filter), 1)
    } else {
      this.filterObj.filterObjects[this.filterObj.filterObjects.indexOf(filter)] = replaceFilter;
    }
  }
  addFilter(filterObj: FilterObj) {
    this.filterObj.filterObjects.push(filterObj)
  }
  updateType(event: any) {
    this.filterObj.type = event.target.value;
  }
}
