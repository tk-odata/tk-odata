import { Component, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { Filter, CompareCriterica, TimeCriteria, TextCriteria, InCriterica, CustomCriteria, C, TF, TO } from 'src/app/services/query-generator/filters';

export class CritObj extends FilterObj {
  override createFilter(): Filter | null {
    // switch case didn't work?
    if (this.critType == 0) {
      if (this.value == "") return null;
      return new CompareCriterica(this.property, this.comparator, this.value);
    } else if (this.critType == 1) {
      if (this.value == "") return null;
      return new TimeCriteria(this.timeOption, this.property, this.comparator, this.value as unknown as number)
    } else if (this.critType == 2) {
      if (this.value == "") return null;
      return new TextCriteria(this.textOption!, this.property, this.value)
    } else if (this.critType == 3) {
      if (this.values.length == 0) return null
      return new InCriterica(this.property, this.values.map(x => x.input))
    } else if (this.critType == 4) {
      if (this.value == "") return null;
      return new CustomCriteria(this.value);
    } else {
      console.log("An error occured and filter is skipped", this)
    }
    return null;
  }
  critType: number = 0;

  value: string = "";
  property!: string;

  // comparator
  comparator!: C;

  // text option
  textOption!: TF;

  // time option
  timeOption!: TO;
  // in
  values: CritInput[] = []
  // custom
}
interface CritInput {
  input: string;
}

@Component({
  selector: 'app-crit-filter',
  templateUrl: './crit-filter.component.html',
  styleUrls: ['./crit-filter.component.css']
})
export class CritFilterComponent extends BaseFilterDirective<CritObj> implements OnInit {

  ngOnInit(): void {
    if (this.filterObj.property == null) {
      this.filterObj.property = this.getProperties()[0]
    }
    if (this.filterObj.comparator == null) {
      this.filterObj.comparator = this.getOperators()[0].value
    }
    if (this.filterObj.textOption == null) {
      this.filterObj.textOption = this.getTextOptions()[0].value
    }
    if (this.filterObj.timeOption == null) {
      this.filterObj.timeOption = this.getTimeOption()[0].value
    }
  }

  setCritType(event: any) {
    this.filterObj.critType = event.target.value;
  }

  getOperators() {
    const enumList = [];
    for (const key in C) {
      if (isNaN(Number(key))) {
        enumList.push({ key, value: C[key as keyof typeof C] });
      }
    }
    return enumList;
  }

  getTextOptions() {
    const enumList = [];
    for (const key in TF) {
      if (isNaN(Number(key))) {
        enumList.push({ key, value: TF[key as keyof typeof TF] });
      }
    }
    return enumList;
  }

  getTimeOption() {
    const enumList = [];
    for (const key in TO) {
      if (isNaN(Number(key))) {
        enumList.push({ key, value: TO[key as keyof typeof TO] });
      }
    }
    return enumList;
  }

  getProperties() {
    return this.tableComp.getAllOrderbyOptions()
  }
  critOptions = [
    { val: 0, text: "Compare" },
    { val: 1, text: "Time" },
    { val: 2, text: "Text" },
    { val: 3, text: "In" },
    { val: 4, text: "Custom" }
  ]

  // in
  addInput() {
    this.filterObj.values.push({ input: "" });
    console.log(this.filterObj)
  }

  removeInput(input: CritInput) {
    this.filterObj.values.splice(this.filterObj.values.indexOf(input), 1);
  }
  critTypeChange(event: any) {
    this.filterObj.critType = event.target.value
  }
  timeOptionChange(event: any) {
    this.filterObj.timeOption = event.target.value
  }
  propertyChange(event: any) {
    this.filterObj.property = event.target.value
  }
  textFilterChange(event: any) {
    this.filterObj.textOption = event.target.value
  }
  operatorChange(event: any) {
    this.filterObj.comparator = event.target.value
  }
  valueChange(event: any) {
    this.filterObj.value = event.target.value
  }
  updateValue(i: CritInput, event: any) {
    i.input = event.target.value;
  }

}
