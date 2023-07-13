import { Component, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { Filter, NotCriterica } from 'src/app/services/query-generator/filters';

export class NotObj extends FilterObj {
  override createFilter(): Filter | null {
    if (this.notFilter == null) return null;
    let filter = this.notFilter.createFilter();
    if (filter == null) return null;
    return new NotCriterica(filter)
  }
  notFilter?: FilterObj;
}

@Component({
  selector: 'app-not-filter',
  templateUrl: './not-filter.component.html',
  styleUrls: ['./not-filter.component.css']
})
export class NotFilterComponent extends BaseFilterDirective<NotObj> implements OnInit {


  ngOnInit(): void {
  }

  setFilterType(event: FilterObj) {
    this.filterObj.notFilter = event;
  }
  removeFilter() {
    this.filterObj.notFilter = undefined
  }
}
