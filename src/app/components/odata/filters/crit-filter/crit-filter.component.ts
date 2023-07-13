import { Component, OnInit } from '@angular/core';
import { BaseFilterDirective, FilterObj } from '../base-filter.directive';
import { Filter, CompareCriterica, TimeCriteria, TextCriteria, InCriterica, CustomCriteria, C, TF, TO } from 'src/app/services/query-generator/filters';
import { ALanguage } from 'src/app/services/language';
import { LanguageFactory } from 'src/app/services/language-factory.service';

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
  lg: ALanguage;
  critOptions: { val: number; label: any; }[];
  textOptions: { val: TF; label: any; }[];
  timeOptions: { val: TO; label: any; }[];
  compareOptions: { val: C; label: any; }[];

  constructor(lFactory: LanguageFactory) {
    super();
    this.lg = lFactory.getLanguageService();

    this.critOptions = [
      { val: 0, label: this.lg.critOptionCompare },
      { val: 1, label: this.lg.critOptionTime },
      { val: 2, label: this.lg.critOptionText },
      { val: 3, label: this.lg.critOptionIn },
      { val: 4, label: this.lg.critOptionCustom }
    ]

    this.textOptions = [
      { val: TF.Contains, label: this.lg.textOptionContains },
      { val: TF.StartsWith, label: this.lg.textOptionStartsWith },
      { val: TF.EndsWith, label: this.lg.textOptionEndsWith },
    ]

    this.timeOptions = [
      { val: TO.Second, label: this.lg.textOptionSecond },
      { val: TO.Minute, label: this.lg.textOptionMinute },
      { val: TO.Hour, label: this.lg.textOptionHour },
      { val: TO.Day, label: this.lg.textOptionDay },
      { val: TO.Month, label: this.lg.textOptionMonth },
      { val: TO.Year, label: this.lg.textOptionYear },
    ]

    this.compareOptions = [
      { val: C.Equals, label: this.lg.compareOptionsEquals },
      { val: C.NotEquals, label: this.lg.compareOptionsNotEquals },
      { val: C.GreaterEqual, label: this.lg.compareOptionsGreaterEqual },
      { val: C.GreaterThan, label: this.lg.compareOptionsGreaterThan },
      { val: C.LowerEqual, label: this.lg.compareOptionsLowerEqual },
      { val: C.LowerThan, label: this.lg.compareOptionsLowerThan },
    ]
  }

  ngOnInit(): void {
    if (this.filterObj.property == null) {
      this.filterObj.property = this.getProperties()[0]
    }
    if (this.filterObj.comparator == null) {
      this.filterObj.comparator = this.compareOptions[0].val
    }
    if (this.filterObj.textOption == null) {
      this.filterObj.textOption = this.textOptions[0].val
    }
    if (this.filterObj.timeOption == null) {
      this.filterObj.timeOption = this.timeOptions[0].val
    }
  }

  setCritType(event: any) {
    this.filterObj.critType = event.target.value;
  }

  getProperties() {
    return this.tableComp.getAllOrderbyOptions()
  }

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
