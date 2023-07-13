import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
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

  @Input() filterBuildType!: FilterBuildType;
  @Input() tableComp!: QbTableComponent;
  @ViewChildren(QbFilterComponent) filters?: QueryList<QbFilterComponent>;

  @Output() removeEvent = new EventEmitter();
  type!: string;
  @Input() filterObj!: FilterObj;

  constructor() { }

  ngOnInit(): void {
    if (this.filterBuildType == FilterBuildType.comp) {
      this.type = "composite";
    } else if (this.filterBuildType == FilterBuildType.list) {
      this.type = "list";
    } else if (this.filterBuildType == FilterBuildType.crit) {
      this.type = "crit"
    } else if (this.filterBuildType == FilterBuildType.not) {
      this.type = "not"
    }
  }

  getFilter() {

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
    this.removeEvent.emit();
  }
}

