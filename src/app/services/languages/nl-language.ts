
import { ALanguage } from "../language";

export class NlLangauge extends ALanguage {
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

    override helpText: string = `Extra Hulp en Opmerkingen <br>
    <b>`+ this.attributes + `:</b> Klik op <b>` + this.unAndSelectAll + `</b> in ` + this.attributes + ` om alle waardes te zien<br/>
    <b>`+ this.relations + `:</b> Selecteer de relaties die je toegevoegd wil hebben. Opmerking: <b>` + this.filters + `</b> in een relatie filtert alleen de resultaten na de top level filter.
    <b>`+ this.filters + `:</b> Filter de resultaten met filters. Om een tekst waarde te gebruiken sluit je deze in met quotes ('/") DOE DIT <b>NIET</b> in de <b>` + this.critOptionIn + `</b> of <b>` + this.critOptionText + `</b>. Dit is nodig zodat ook waardes als: null, false/true, nummers, datums and uuids in een vergelijking gebruikt kunnen worden.<br/>
    Als je een <b>Datum</b> wil vergelijken, moet het in deze format: <i>2012-03-20T00:00:00Z</i><br/>
    Noteer ook dat maar een kleine aantal Nodes beschikbaar zijn. Dus in plaats van een lange <b>`+ this.addOptionAndOr + `</b>, gebruik <b>` + this.addOptionCriteria + " > " + this.critOptionIn + `</b> en voeg elke waarde apart toe<br/>
    <b>`+ this.updateDataButton + ` Knop: </b> Gebruik deze knop om een URL te genereren. Ook kan je de eerste 10 resultaten zien (als CORS is uitgeschakeld*)<br/ >
    Noteer ook dat het goed mogelijk is dat niet alle `+ this.attributes + ` en ` + this.relations + ` te zien zijn. Om dit op te lossen for filters kun je de ` + this.critOptionCustom + ` gebruiken. Voor andere dingen zul je zelf de url moeten aanpassen.
        `;
}