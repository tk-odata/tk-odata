export abstract class Filter {
    abstract toText(ref?: string): string;
}

export abstract class CompositeFilter extends Filter {
    filters: Filter[]
    public constructor(public data: Filter | Filter[]) {
        super();
        if (!Array.isArray(data))
            data = [data]
        this.filters = data
    }

    addFilter(filter: Filter) {
        this.filters.push(filter)
    }
    addFilters(filters: Filter[]) {
        this.filters.push(...filters)
    }
}

export class OrFilter extends CompositeFilter {
    constructor(data: Filter | Filter[] = []) {
        super(data)
    }

    toText(ref?: string): string {
        var text = "("

        var filterCount = this.filters.length
        for (let n = 0; n < filterCount; n++) {
            text += this.filters[n].toText(ref)
            if (n + 1 < filterCount) {
                text += " or "
            }
        }

        text += ")"

        return text;
    }
}

export class AndFilter extends CompositeFilter {
    constructor(data: Filter | Filter[] = []) {
        super(data)
    }
    toText(ref?: string): string {
        var text = "("

        var filterCount = this.filters.length
        for (let n = 0; n < filterCount; n++) {
            text += this.filters[n].toText(ref)
            if (n + 1 < filterCount) {
                text += " and "
            }
        }

        text += ")"

        return text;
    }
}

export class CustomCriteria extends Filter {
    public constructor(private criteria: string) {
        super();
    }
    toText(): string {
        return this.criteria
    }
}

export abstract class Criteria extends Filter {

}
export abstract class ACriteria extends Filter {

}

// simple filters for complex use your own
export class AnyCriteria extends ACriteria {
    public constructor(private listProperty: string, private filter: Filter) {
        super();
    }
    toText(ref?: string): string {
        let oldRef = ref;
        if (!ref) ref = "a"
        else ref += "a" // make the key longer so they don't conflict.
        var text = "";
        if (oldRef) text += oldRef + "/"
        text += this.listProperty + "/any(" + ref + ":"

        text += this.filter.toText(ref)

        text += ")"

        return text;
    }
}
export class AllCriteria extends ACriteria {
    public constructor(private propertyList: string, private filter: Filter) {
        super();
    }
    toText(ref?: string): string {
        let oldRef = ref;
        if (!ref) ref = "a"
        else ref += "a" // make the key longer so they don't conflict.
        var text = "";
        if (oldRef) text += oldRef + "/"
        text += this.propertyList + "/all(" + ref + ":"

        text += this.filter.toText(ref)

        text += ")"

        return text;
    }
}

export enum C { // comparators
    Equals = "eq", // equals
    NotEquals = "ne", // not equals
    GreaterThan = "gt", // greater than
    LowerThan = "lt", // lower than
    GreaterEqual = "ge", // greater equals
    LowerEqual = "le" // lower equals
}

export class CompareCriterica extends Criteria {
    public constructor(private prop: string, private comparator: C, private value: any) {
        super();
        // for value use:
        // string = surround with '', 'value'
        // number = 10
        // id | date the object without 2022-19-20
        // null = null
    }

    toText(ref?: string): string {
        let text = ""
        if (ref) text += ref + "/"
        text += this.prop + " " + this.comparator + " " + this.value
        return text;
    }
}
export class InCriterica extends Criteria {
    public constructor(private prop: string, private inList: string[]) {
        super();
    }

    toText(ref?: string): string {
        let text = ""
        if (ref) text += ref + "/"
        text += this.prop + " in " + "('"
        text += this.inList.join("','")
        text += "')"
        return text;
    }
}

export enum TF { // TextFilter
    StartsWith = "startswith",
    EndsWith = "endswith",
    Contains = "contains",
}

export class TextCriteria extends Criteria {
    public constructor(private method: TF, private prop: string, private searchText: string) {
        super();
    }

    toText(ref?: string): string {
        let text = ""
        text += this.method + "("
        if (ref) text += ref + "/"
        text += this.prop + ","
        text += "'" + this.searchText + "'"
        text += ")"
        return text;
    }
}

export enum TO {
    Second = "second",
    Minute = "minute",
    Hour = "hour",
    Day = "day",
    Month = "month",
    Year = "year",
}

export class TimeCriteria extends Criteria {
    public constructor(private time: TO, private prop: string, private comparator: C, private value: number) {
        super();
    }

    toText(ref?: string): string {
        let text = ""
        text += this.time + "("
        if (ref) text += ref + "/"
        text += this.prop + ") " + this.comparator + " " + this.value
        return text;
    }
}


export class NotCriterica extends Filter {
    public constructor(private filter: Filter) {
        super();
    }

    toText(ref?: string): string {
        let text = "not("
        text += this.filter.toText(ref)
        text += ")"
        return text;
    }
}