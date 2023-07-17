import { Component, EventEmitter, HostListener, Input, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FilterBuildType } from '../add-filter/add-filter.component';
import { QbTableComponent } from '../qb-table/qb-table.component';
import { CritObj } from '../filters/crit-filter/crit-filter.component';
import { FilterObj } from '../filters/base-filter.directive';
import { CompObj } from '../filters/comp-filter/comp-filter.component';
import { ListObj } from '../filters/list-filter/list-filter.component';
import { NotObj } from '../filters/not-filter/not-filter.component';

@Component({
  selector: 'app-qb-filter',
  templateUrl: './qb-filter.component.html',
  styleUrls: ['./qb-filter.component.css']
})
export class QbFilterComponent implements OnInit {

  @Input() tableComp!: QbTableComponent;
  @ViewChildren(QbFilterComponent) filters?: QueryList<QbFilterComponent>;

  // replace the filter with another one (or if undefined it should be removed)
  @Output() alterFilterObj = new EventEmitter<FilterObj | undefined>();
  type!: string;
  @Input() filterObj!: FilterObj;

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges) {
    if ('filterObj' in changes) {
      this.setFilterBuildType();
      console.log("fired")
    }
  }

  setFilterBuildType() {
    switch (this.filterObj.filter) {
      case FilterBuildType.comp:
        this.type = "composite";
        break;
      case FilterBuildType.list:
        this.type = "list";
        break;
      case FilterBuildType.crit:
        this.type = "crit";
        break;
      case FilterBuildType.not:
        this.type = "not";
        break;
    }
  }

  getCompObj() {
    return this.filterObj as CompObj
  }
  getListObj() {
    return this.filterObj as ListObj
  }
  getCritObj() {
    return this.filterObj as CritObj
  }
  getNotObj() {
    return this.filterObj as NotObj
  }


  getType(): string {
    return this.type;
  }
  remove() {
    this.alterFilterObj.emit(undefined);
  }

  // hidden add and or filter, use shift to remove filter if its an on off with 1 filter
  showContextMenu(event: any) {
    event.preventDefault()
    // add and or filter
    let filterToNest = this.filterObj;
    let newFilterObj = new CompObj();
    newFilterObj.filter = FilterBuildType.comp
    newFilterObj.filterObjects.push(filterToNest);

    this.alterFilterObj.emit(newFilterObj);
  }
}

