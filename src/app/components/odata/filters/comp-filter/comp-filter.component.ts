import { Component, Input, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { Filter, AndFilter, OrFilter } from 'src/app/services/query-generator/filters';

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

  ngOnInit(): void {
  }

  removeFilter(filter: FilterObj) {
    this.filterObj.filterObjects.splice(this.filterObj.filterObjects.indexOf(filter), 1)
  }
  addFilter(filterObj: FilterObj) {
    this.filterObj.filterObjects.push(filterObj)
  }
  updateType(event: any) {
    this.filterObj.type = event.target.value;
  }
}
