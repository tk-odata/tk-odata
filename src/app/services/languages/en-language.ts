import { ALanguage } from "../language";

export class EnLangauge extends ALanguage {
    override HelpTitle: string = "Help and Notes";
    override filtersHelpInputRestrictions: string = "Compare Query input restrictions:";
    override filtersHelpInputRestrictionsCompare: string = "Compare: possible values:";
    override filtersHelpInputRestrictionsCompareText: string = "text: surround it with quotes ";
    override filtersHelpInputRestrictionsCompareNumbers: string = 'numbers';
    override filtersHelpInputRestrictionsCompareNull: string = "null"
    override filtersHelpInputRestrictionsCompareBoolean: string = "boolean: false/true"
    override filtersHelpInputRestrictionsCompareTime: string = "time: yyyy-mm-ddThh:mm:ss('.'s+)?(zzzzzz)? (i.e.: 2012-03-20T00:00:00Z)"
    override filtersHelpInputRestrictionsCompareGuid: string = "guid: its not a string so quotes are not needed"
    override filtersHelpInputRestrictionsTime: string = "Time: only use numbers"
    override filtersHelpInputRestrictionsText: string = "Text: only text values, no need for quotes"
    override filtersHelpInputRestrictionsInList: string = "In List: only text values, no need for quotes"
    override filtersHelpInputRestrictionsCustom: string = "Custom: just a string, in case you want to add something that is mssing"
    override filtersHelpNoRestrictions: string = "As of now there are no restrictions on the input fields."

    override attributesHelp: string = "When all/no items are selected, the result will return every field";
    override relationsHelp: string = `Select a relation to get related data.`;
    override filtersHelp: string = `Clicking the X on the top filter will destory all filters.<br>
    Removing an and/or filter which has only 1 nested filter will only remove the and/or filter and keep
    that 1 filter.<br>Right-clicking under the X will add an and/or filter and nest that component.`;
    override updateDataButtonHelp: string = `After clicking the button, the url gets generated (see bar at top).<br>
    Then it also does the request and grabs the top 10,
    if you turn off CORS you will be able to directly see the data structure.<br>
    (When the page starts lagging, turn it off)`;
    override showResultLabel: string = "Show Results in jsonViewer? (Toggle off when page gets laggy.)";
    override tipText: string = "Feel free to leave a tip";
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
}