import { Component, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { QbFilterComponent } from '../qb-filter/qb-filter.component';
import { FilterBuildType } from '../add-filter/add-filter.component';
import { FilterObj } from '../filters/base-filter.directive';
import { QBTable } from 'src/app/services/query-generator/Table';
import { scheme, schemeBaseProperties } from '../odata-schema';


class TableData {
  attributesSelection: AttributeOption[] = [];
  relationsSelectionOptions: RelationOption[] = [];
  orderByProp: string = "null";
  orderByAscending = false;
  filterObj?: FilterObj;
  relation?: RelationOption;
  entity!: string;
  count = false;
}

interface AttributeOption {
  name: string;
  checked: boolean;
}

export class RelationOption {
  name!: string;
  type!: string;
  many!: boolean;
  checked: boolean = false;
  tableData?: TableData;
}

@Component({
  selector: 'app-qb-table',
  templateUrl: './qb-table.component.html',
  styleUrls: ['./qb-table.component.css']
})
export class QbTableComponent implements OnInit {

  @Input() entity: string = "";
  @Input() relation?: RelationOption;
  @Input() upperTable = true;
  @Output() change = new EventEmitter<QBTable>();
  @ViewChildren(QbTableComponent) tableComponents?: QueryList<QbTableComponent>;
  @ViewChildren(QbFilterComponent) filterComp!: QbFilterComponent;

  filterType?: FilterBuildType;

  @Input() tableData?: TableData;

  attirbuteOpen = false;
  relationOpen = false;
  filterOpen = false;

  constructor() {
  }

  ngOnInit(): void {
    this.setTable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('entity' in changes) {
      if (this.upperTable) {
        this.tableData = undefined;
        this.setTable();
      }
    }
  }

  // not happy about this function but as long as it works it should be fine...
  setTable() {
    // only set if something new happens, so if attributes exist nothing should be added/set
    if (this.tableData == null) {
      this.tableData = new TableData()
      this.tableData.filterObj = undefined;
    } else if (this.tableData?.attributesSelection.length > 0) return
    this.tableData.entity = this.entity;
    this.tableData.relation = this.relation;
    this.filterType = undefined;
    this.attirbuteOpen = false;
    this.relationOpen = false;
    if (Object.keys(scheme).indexOf(this.entity) == -1) {
      console.log("Entity: " + this.entity + "NOT FOUND")
      return;
    }
    var relations: { [relation: string]: RelationOption; } = {};
    // add base data (id, gewijzigdOP, apigewijzigdOp, verwijder)
    for (let attribute of [...scheme[this.entity].properties, ...schemeBaseProperties]) {
      switch (attribute.type) {
        case "intType":
        case "unsignedIntType":
        case "stringType":
        case "tokenType":
        case "dateType":
        case "datumType":
        case "dateTimeType":
        case "booleanType":

        case "xs:int":
        case "xs:unsignedInt":
        case "xs:decimal":
        case "xs:string":
        case "xs:dateTime":

        case "vergaderjaarType":
        case "vergaderjaar":

        case "referentieType":
          this.tableData.attributesSelection.push({
            name: attribute.name,
            checked: true
          });
          break;
        case "referentieLiteral":
          relations[attribute.name.toLowerCase()] = {
            name: attribute.name,
            type: attribute.name,
            many: false,
            checked: false
          };
          break;
        default:
          // console.log(attribute.type)
          continue;
      }
    }

    if (scheme[this.entity].relations) {
      for (let rel of scheme[this.entity].relations!) {
        relations[rel.name.toLowerCase()] = {
          name: rel.name,
          type: rel.type ? rel.type : rel.name,
          many: rel.many,
          checked: false
        };
      }
    }
    for (let key in relations) {
      this.tableData.relationsSelectionOptions.push(relations[key])
    }

  }

  getTable(tableData?: TableData) {
    if (tableData == null) {
      tableData = this.tableData!
    }
    let selected: string[] = []
    let somethingUnSelected = false
    for (let ao of tableData.attributesSelection) {
      if (ao.checked) {
        selected.push(ao.name)
      } else {
        somethingUnSelected = true;
      }
    }
    if (!somethingUnSelected) selected = []

    let options: Partial<QBTable> = {};

    let expansions: QBTable[] = [];
    if (tableData.relationsSelectionOptions) {
      for (let relOption of tableData.relationsSelectionOptions) {
        if (relOption.checked) {
          expansions.push(this.getTable(relOption.tableData))
        }
      }
      options.expansions = expansions
    }
    let f = tableData.filterObj?.createFilter()
    if (f != null) {
      options.filter = f;
    }

    options.count = tableData.count

    if (tableData.orderByProp != "null") {
      options.orderBy = true
      options.orderByProp = tableData.orderByProp
      options.orderByAscending = tableData.orderByAscending;
    }
    return new QBTable(tableData.relation?.name ?? tableData.entity, selected, options)
  }

  // get plus or minus
  getPM(val: boolean) {
    return val ? "-" : "+"
  }
  toggleAttributeOpen() {
    this.attirbuteOpen = !this.attirbuteOpen;
  }
  toggleSelectAllAttributes() {
    let newState = true;
    for (let attr of this.tableData!.attributesSelection) {
      if (attr.checked) {
        newState = false;
        break
      }
    }

    for (let attr of this.tableData!.attributesSelection) {
      attr.checked = newState;
    }
  }
  changeAttributeOption(attribute: AttributeOption, event: any) {
    attribute.checked = event.target.checked
  }
  toggleRelationsOpen() {
    this.relationOpen = !this.relationOpen;
  }
  changeRelationsOption(attribute: RelationOption, event: any) {
    attribute.checked = event.target.checked
  }
  getTableDataOfAttribute(attribute: RelationOption) {
    if (attribute.tableData == null) {
      attribute.tableData = new TableData();
      attribute.tableData.entity = attribute.type!;
    }
    return attribute.tableData;
  }
  toggleFilterOpen() {
    this.filterOpen = !this.filterOpen;
  }
  setFilterType(event: FilterObj) {
    this.filterType = event.filter
    this.tableData!.filterObj = event;
  }
  removeFilter() {
    this.filterType = undefined;
    this.tableData!.filterObj = undefined;
  }
  onOrderBySelectionChange(event: any) {
    this.tableData!.orderByProp = event.target.value;
  }
  onOrderByAscendingChange(event: any) {
    this.tableData!.orderByAscending = event.target.checked;
  }
  setCount(event: any) {
    this.tableData!.count = event.target.checked
  }

  // issues as when relation gets updated the first cycle it will not have relationsships and then it will.
  // OrderbyOptions only apply on your selected Relationships and not on all
  getAllOrderbyOptions(nestPre: string = "", relation?: RelationOption) {
    let tableData: TableData;
    if (relation == null) {
      tableData = this.tableData!;
    } else {
      tableData = relation.tableData!
    }
    if (tableData == null) return [];

    let options: string[] = []
    for (let option of tableData!.attributesSelection) {
      options.push(nestPre + option.name)
    }
    for (let relation of tableData!.relationsSelectionOptions) {
      if (!relation.many && relation.checked)
        options.push(...this.getAllOrderbyOptions(nestPre + relation.name + "/", relation))
    }
    return options;
  }
}
