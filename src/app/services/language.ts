export abstract class ALanguage {
  abstract placeHolderInput: string
  abstract placeHolderInputCustom: string
  abstract dontOrderBy: string
  abstract relation: string
  abstract type: string;
  abstract addInput: string;
  abstract compOR: string;
  abstract compAND: string;
  abstract notFilterTitle: string;
  abstract addOptionNot: string;
  abstract addOptionCriteria: string;
  abstract addOptionAndOr: string;
  abstract addOptionAnyAll: string;
  abstract listOptionAny: string;
  abstract listOptionAll: string;
  abstract critOptionCompare: string;
  abstract critOptionTime: string;
  abstract critOptionText: string;
  abstract critOptionIn: string;
  abstract critOptionCustom: string;
  abstract textOptionContains: string;
  abstract textOptionStartsWith: string;
  abstract textOptionEndsWith: string;
  abstract textOptionSecond: string;
  abstract textOptionMinute: string;
  abstract textOptionHour: string;
  abstract textOptionDay: string;
  abstract textOptionMonth: string;
  abstract textOptionYear: string;
  abstract compareOptionsEquals: string;
  abstract compareOptionsNotEquals: string;
  abstract compareOptionsGreaterEqual: string;
  abstract compareOptionsGreaterThan: string;
  abstract compareOptionsLowerEqual: string;
  abstract compareOptionsLowerThan: string;
  abstract corsError: string;
  abstract helpText: string;

  constructor() { }

  abstract header: string

  abstract copyButton: string

  abstract attributes: string
  abstract unAndSelectAll: string

  abstract relations: string

  abstract filters: string

  abstract countRows: string
  abstract orderbyTitle: string
  abstract orderbyAscending: string
  abstract updateDataButton: string

  abstract selectEntity: string
}


