import { ALanguage } from "../language";

export class EnLangauge extends ALanguage {
    override corsError: string = `For the results to be displayed, you need to turn off CORS for: <a target="_blank" href="https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0">https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0</a>.<br/> 
    You can do this by downloading an google chrome extension like <a target="_blank" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Allow CORS</a><br>
    You can still use the Application to build URLs`;
    override placeHolderInput: string = "Value";
    override placeHolderInputCustom: string = "Your Query";
    override textOptionContains: string = "Contains";
    override textOptionStartsWith: string = "Starts With";
    override textOptionEndsWith: string = "Ends With";
    override textOptionSecond: string = "Second";
    override textOptionMinute: string = "Minute";
    override textOptionHour: string = "Hour";
    override textOptionDay: string = "Day";
    override textOptionMonth: string = "Month";
    override textOptionYear: string = "Year";
    override compareOptionsEquals: string = "Equal";
    override compareOptionsNotEquals: string = "Not Equal";
    override compareOptionsGreaterEqual: string = "Greater or Equal";
    override compareOptionsGreaterThan: string = "Greater Than";
    override compareOptionsLowerEqual: string = "Lower or Equal";
    override compareOptionsLowerThan: string = "Lower Than";
    override addOptionNot: string = "Not";
    override addOptionCriteria: string = "Criteria";
    override addOptionAndOr: string = "And/Or";
    override addOptionAnyAll: string = "Any/All";
    override listOptionAny: string = "Any";
    override listOptionAll: string = "All";
    override critOptionCompare: string = "Compare Query";
    override critOptionTime: string = "Time Query";
    override critOptionText: string = "Text Query";
    override critOptionIn: string = "In List Query";
    override critOptionCustom: string = "Custom Query";
    override addInput: string = "Add New Input";
    override compOR: string = "Or Filter";
    override compAND: string = "And Filter";
    override notFilterTitle: string = "Not";
    override relation: string = "Relation";
    override type: string = "Option";
    override dontOrderBy: string = "Don't Sort"
    override selectEntity: string = "Select Entity"
    override header: string = "OpenData Query Builder For:";
    override copyButton: string = "Copy";
    override attributes: string = "Attributes";
    override unAndSelectAll: string = "Un/Select All";
    override relations: string = "Relations";
    override filters: string = "Filters";
    override countRows: string = "Count rows?";
    override orderbyTitle: string = "Order By";
    override orderbyAscending: string = "Ascending?";
    override updateDataButton: string = "Update Url";

    override helpText: string = `Extra Help and Notes <br>
    <b>`+ this.attributes + `:</b> Click on <b>` + this.unAndSelectAll + `</b> in ` + this.attributes + ` to see them all<br/>
    <b>`+ this.relations + `:</b> Select the relations you want to expand. Also take note that <b>` + this.filters + `</b> inside a relation are only used to filter those results and will be seperate from the base ` + this.filters + `<br/>
    <b>`+ this.filters + `:</b> Filter the entity based on your requirements. If the value is text enclose it with quotes ('/"). <b>Don't</b> do this in the In Query or Text Query This is necessary so you can use: null, false/true, numbers, dates and uuids.<br/>
    Also Note that limited nodes are available, so instead of chaining the <b>`+ this.addOptionAndOr + `</b>, use the <b>` + this.addOptionCriteria + " > " + this.critOptionIn + `</b> and add each value as an item.<br/>
    <b>`+ this.updateDataButton + ` Button: </b> Use this to generate the url in the top bar. It will also call a request to load in the top 10 so you can look at the data (if CORS is disabled*)<br/ >
    Also note that it might be possible that `+ this.attributes + ` and/or ` + this.relations + ` are missing. To solve this for queries, you can use the ` + this.critOptionCustom + `. For other issues you have to fiddle with the url yourself.
        `;
}