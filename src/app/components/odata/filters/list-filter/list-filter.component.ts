import { Component, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { QbTableComponent, RelationOption } from '../../qb-table/qb-table.component';
import { AllCriteria, AnyCriteria, Filter } from 'src/app/services/query-generator/filters';

export class ListObj extends FilterObj {
  override createFilter(): Filter | null {
    if (this.listFilter == null) return null;
    let filter = this.listFilter.createFilter()
    if (filter == null) return null;

    if (this.type == "ALL") {
      return new AllCriteria(this.selectedRelation.name, filter);
    } else { // ANY
      return new AnyCriteria(this.selectedRelation.name, filter);
    }
  }
  type: string = "ALL";
  selectedRelation!: RelationOption;
  listFilter?: FilterObj;
  table!: QbTableComponent;
}

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent extends BaseFilterDirective<ListObj> implements OnInit {

  ngOnInit(): void {
    if (this.filterObj.selectedRelation == null) {
      this.filterObj.selectedRelation = this.getListRelations()[0];
      this.setRelationTable();
    }
  }
  setRelationTable() {
    const component = new QbTableComponent();
    component.entity = this.filterObj.selectedRelation.type
    component.setTable()
    this.filterObj.table = component;
  }
  updateType(event: any) {
    this.filterObj.type = event.target.value
  }

  getListRelations() {
    return this.tableComp.tableData!.relationsSelectionOptions.filter(x => x.many)
  }
  setRelation(event: any) {
    let name = event.target.value
    this.filterObj.selectedRelation = this.getListRelations().find(x => x.name == name)!;
    this.setRelationTable();
  }
  setFilterType(event: FilterObj) {
    this.filterObj.listFilter = event;
  }
  removeFilter() {
    this.filterObj.listFilter = undefined
  }
}
