
import { ALanguage } from "../language";

export class NlLangauge extends ALanguage {
    override HelpTitle: string = "Help en Notities";
    override filtersHelpInputRestrictions: string = "Vergelijk query invoerbeperkingen:";
    override filtersHelpInputRestrictionsCompare: string = "Vergelijk: mogelijke waarden:";
    override filtersHelpInputRestrictionsCompareText: string = "tekst: omring het met aanhalingstekens";
    override filtersHelpInputRestrictionsCompareNumbers: string = 'nummers';
    override filtersHelpInputRestrictionsCompareNull: string = "null";
    override filtersHelpInputRestrictionsCompareBoolean: string = "booleaans: false/true";
    override filtersHelpInputRestrictionsCompareTime: string = "tijd: yyyy-mm-ddThh:mm:ss('.'s+)?(zzzzzz)? (bijv.: 2012-03-20T00:00:00Z)";
    override filtersHelpInputRestrictionsCompareGuid: string = "guid: het is geen string, dus aanhalingstekens zijn niet nodig";
    override filtersHelpInputRestrictionsTime: string = "Tijd: gebruik alleen cijfers";
    override filtersHelpInputRestrictionsText: string = "Tekst: alleen tekstwaarden, geen aanhalingstekens nodig";
    override filtersHelpInputRestrictionsInList: string = "In lijst: alleen tekstwaarden, geen aanhalingstekens nodig";
    override filtersHelpInputRestrictionsCustom: string = "Aangepast: gewoon een string, voor het geval je iets wilt toevoegen dat ontbreekt";
    override filtersHelpNoRestrictions: string = "Op dit moment zijn er geen beperkingen op de invoervelden.";

    override attributesHelp: string = "Wanneer alle/geen items zijn geselecteerd, wordt elk veld geretourneerd";
    override relationsHelp: string = `Selecteer een relatie om gerelateerde gegevens op te halen.`;
    override filtersHelp: string = `Door op de X van de hoogste filter te klikken, worden alle filters verwijderd.<br>
    Het verwijderen van een en/of-filter met slechts 1 kind, zal alleen het en/of-filter verwijderen en dat ene filter behouden.<br>
    Met rechts klikken onder de X wordt een en/of-filter toegevoegd en dat component genest.`;
    override updateDataButtonHelp: string = `Nadat je op de knop hebt geklikt, wordt de URL gegenereerd (zie balk bovenaan).<br>
    Daarna wordt ook het verzoek gedaan en worden de eerste 10 resultaten opgehaald.
    Als je CORS uitschakelt, kun je de gegevensstructuur direct zien.<br>
    (Wanneer de pagina traag wordt, schakel het dan ook uit)`;

    override showResultLabel: string = "Weergeef Resultaten in JsonViewer? (Handig om uit te zetten, bij veel data)"
    override tipText: string = "Voel je vrij om een fooi te geven";
    override corsError: string = `Om resultaten te kunnen zien, zul je CORS moeten uitschakelen voor: <a href="https://opendata.tweedekamer.nl/">https://opendata.tweedekamer.nl/</a>.<br/> 
    Je kunt dit o.a. doen door deze chrome extensie te downloaden: <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Allow CORS</a><br>
    Je kunt nog steeds de applicatie gebruiken om een url te creëren.`;
    override placeHolderInput: string = "Waarde";
    override placeHolderInputCustom: string = "Jouw Query";
    override textOptionContains: string = "Bevat";
    override textOptionStartsWith: string = "Begint Met";
    override textOptionEndsWith: string = "Eindigt Met";
    override textOptionSecond: string = "Seconde";
    override textOptionMinute: string = "Minuut";
    override textOptionHour: string = "Uur";
    override textOptionDay: string = "Dag";
    override textOptionMonth: string = "Maand";
    override textOptionYear: string = "Jaar";
    override compareOptionsEquals: string = "Gelijk";
    override compareOptionsNotEquals: string = "Niet Gelijk";
    override compareOptionsGreaterEqual: string = "Groter of Gelijk";
    override compareOptionsGreaterThan: string = "Groter Dan";
    override compareOptionsLowerEqual: string = "Kleiner of Gelijk";
    override compareOptionsLowerThan: string = "Kleiner Dan";
    override addOptionNot: string = "Niet";
    override addOptionCriteria: string = "Criterium";
    override addOptionAndOr: string = "En/Of";
    override addOptionAnyAll: string = "Elke/Alles (any/all)";
    override listOptionAny: string = "Elke (any)";
    override listOptionAll: string = "Alles (all)";
    override critOptionCompare: string = "Vergelijkings Query";
    override critOptionTime: string = "Tijd Query";
    override critOptionText: string = "Tekst Query";
    override critOptionIn: string = "In Lijst Query";
    override critOptionCustom: string = "Aangepaste Query";
    override addInput: string = "Invoer Toeveogen";
    override compOR: string = "Of Filter";
    override compAND: string = "En Filter";
    override notFilterTitle: string = "Niet";
    override relation: string = "Relatie";
    override type: string = "Optie";
    override dontOrderBy: string = "Niet Sorteren"
    override selectEntity: string = "Selecteer een Entity"
    override header: string = "OpenData Query Builder voor:";
    override copyButton: string = "Kopiëren";
    override attributes: string = "Attributen";
    override unAndSelectAll: string = "On/Selecteer Alles";
    override relations: string = "Relaties";
    override filters: string = "Filters";
    override countRows: string = "Rijen Tellen ";
    override orderbyTitle: string = "Sorteren Bij";
    override orderbyAscending: string = "Oplopend?";
    override updateDataButton: string = "Update Url";
}