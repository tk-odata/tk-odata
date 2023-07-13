import { Directive, Input } from '@angular/core';
import { QbTableComponent } from '../qb-table/qb-table.component';
import { FilterBuildType } from '../add-filter/add-filter.component';
import { Filter } from 'src/app/services/query-generator/filters';

export abstract class FilterObj {
  filter!: FilterBuildType;
  abstract createFilter(): Filter | null;
}

@Directive({
  selector: '[appBaseFilter]'
})
export class BaseFilterDirective<T extends FilterObj> {


  @Input() tableComp!: QbTableComponent;
  @Input() filterObj!: T;
  constructor() { }

}
