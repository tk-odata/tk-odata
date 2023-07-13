interface Dictionary {
    [key: string]: Definition;
}

interface Definition {
    name: string;
    type: string;
    relations?: Relation[];
    properties: Property[];
}

interface Relation {
    name: string;
    type?: string;
    many: boolean;
}

interface Property {
    name: string;
    type: string | null;
}

export const schemeBaseProperties: Property[] = [
    {
        "name": "Id",
        "type": "tokenType"
    },
    {
        "name": "GewijzigdOp",
        "type": "xs:dateTime"
    },
    {
        "name": "ApiGewijzigdOp",
        "type": "xs:dateTime"
    },
    {
        "name": "Verwijderd",
        "type": "booleanType"
    },
]

export const scheme: Dictionary = {
    "Persoon": {
        "name": "Persoon",
        "type": "persoonType",
        "relations": [
            {
                "name": "ActiviteitActor",
                "many": true
            },
            {
                "name": "CommissieZetelVastPersoon",
                "many": true
            },
            {
                "name": "CommissieZetelVervangerPersoon",
                "many": true
            },
            {
                "name": "DocumentActor",
                "many": true
            },
            {
                "name": "FractieZetelPersoon",
                "many": true
            },
            {
                "name": "PersoonContactinformatie",
                "many": true
            },
            {
                "name": "PersoonGeschenk",
                "many": true
            },
            {
                "name": "PersoonLoopbaan",
                "many": true
            },
            {
                "name": "PersoonNevenfunctie",
                "many": true
            },
            {
                "name": "PersoonOnderwijs",
                "many": true
            },
            {
                "name": "PersoonReis",
                "many": true
            },
            {
                "name": "Stemming",
                "many": true
            },
            {
                "name": "ZaakActor",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Titels",
                "type": "tokenType"
            },
            {
                "name": "Initialen",
                "type": "tokenType"
            },
            {
                "name": "Tussenvoegsel",
                "type": "tokenType"
            },
            {
                "name": "Achternaam",
                "type": "tokenType"
            },
            {
                "name": "Voornamen",
                "type": "tokenType"
            },
            {
                "name": "Roepnaam",
                "type": "tokenType"
            },
            {
                "name": "Geslacht",
                "type": "stringType"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Geboortedatum",
                "type": "dateType"
            },
            {
                "name": "Geboorteplaats",
                "type": "tokenType"
            },
            {
                "name": "Geboorteland",
                "type": "tokenType"
            },
            {
                "name": "Overlijdensdatum",
                "type": "dateType"
            },
            {
                "name": "Overlijdensplaats",
                "type": "tokenType"
            },
            {
                "name": "Woonplaats",
                "type": "tokenType"
            },
            {
                "name": "Land",
                "type": "tokenType"
            },
            {
                "name": "Fractielabel",
                "type": "tokenType"
            }
        ]
    },
    "PersoonContactinformatie": {
        "name": "PersoonContactinformatie",
        "type": "persoonContactinformatieType",
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Waarde",
                "type": "tokenType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "PersoonGeschenk": {
        "name": "PersoonGeschenk",
        "type": "persoonGeschenkType",
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Omschrijving",
                "type": "tokenType"
            },
            {
                "name": "Datum",
                "type": "dateType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "PersoonLoopbaan": {
        "name": "PersoonLoopbaan",
        "type": "persoonLoopbaanType",
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Werkgever",
                "type": "tokenType"
            },
            {
                "name": "Omschrijvingnl",
                "type": "tokenType"
            },
            {
                "name": "Omschrijvingen",
                "type": "tokenType"
            },
            {
                "name": "Plaats",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "datumType"
            },
            {
                "name": "Totenmet",
                "type": "datumType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "PersoonNevenfunctie": {
        "name": "PersoonNevenfunctie",
        "type": "persoonNevenfunctieType",
        "relations": [
            {
                "name": "PersoonNevenfunctieInkomsten",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Omschrijving",
                "type": "tokenType"
            },
            {
                "name": "Isactief",
                "type": "booleanType"
            },
            {
                "name": "PeriodeVan",
                "type": "datumType"
            },
            {
                "name": "PeriodeTotenmet",
                "type": "datumType"
            },
            {
                "name": "Periode",
                "type": null
            },
            {
                "name": "VergoedingSoort",
                "type": "tokenType"
            },
            {
                "name": "VergoedingToelichting",
                "type": "tokenType"
            },
            {
                "name": "Vergoeding",
                "type": null
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "PersoonNevenfunctieInkomsten": {
        "name": "PersoonNevenfunctieInkomsten",
        "type": "persoonNevenfunctieInkomstenType",
        "relations": [
            { "name": "PersoonNevenfunctie", many: false }
        ],
        "properties": [
            {
                "name": "Persoonnevenfunctie",
                "type": "referentieLiteral"
            },
            {
                "name": "Jaar",
                "type": "tokenType"
            },
            {
                "name": "Bedragsoort",
                "type": "tokenType"
            },
            {
                "name": "Bedragvoorvoegsel",
                "type": "tokenType"
            },
            {
                "name": "Bedragvaluta",
                "type": "tokenType"
            },
            {
                "name": "Bedrag",
                "type": "xs:decimal"
            },
            {
                "name": "Bedragachtervoegsel",
                "type": "tokenType"
            },
            {
                "name": "Frequentie",
                "type": "tokenType"
            },
            {
                "name": "Frequentiebeschrijving",
                "type": "tokenType"
            },
            {
                "name": "Opmerking",
                "type": "tokenType"
            }
        ]
    },
    "PersoonOnderwijs": {
        "name": "PersoonOnderwijs",
        "type": "persoonOnderwijsType",
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Opleidingnl",
                "type": "tokenType"
            },
            {
                "name": "Opleidingen",
                "type": "tokenType"
            },
            {
                "name": "Instelling",
                "type": "tokenType"
            },
            {
                "name": "Plaats",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "datumType"
            },
            {
                "name": "Totenmet",
                "type": "datumType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "PersoonReis": {
        "name": "PersoonReis",
        "type": "persoonReisType",
        "properties": [
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Doel",
                "type": "tokenType"
            },
            {
                "name": "Bestemming",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "datumType"
            },
            {
                "name": "Totenmet",
                "type": "datumType"
            },
            {
                "name": "Betaalddoor",
                "type": "tokenType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "Commissie": {
        "name": "Commissie",
        "type": "commissieType",
        "relations": [
            {
                "name": "ActiviteitActor",
                "many": true
            },
            {
                "name": "CommissieContactinformatie",
                "many": true
            },
            {
                "name": "CommissieZetel",
                "many": true
            },
            {
                "name": "DocumentActor",
                "many": true
            },
            {
                "name": "ZaakActor",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Afkorting",
                "type": "tokenType"
            },
            {
                "name": "Naamnl",
                "type": "tokenType"
            },
            {
                "name": "Naamen",
                "type": "tokenType"
            },
            {
                "name": "Naamwebnl",
                "type": "tokenType"
            },
            {
                "name": "Naamweben",
                "type": "tokenType"
            },
            {
                "name": "Inhoudsopgave",
                "type": "tokenType"
            },
            {
                "name": "Datumactief",
                "type": "dateType"
            },
            {
                "name": "Datuminactief",
                "type": "dateType"
            }
        ]
    },
    "CommissieContactinformatie": {
        "name": "CommissieContactinformatie",
        "type": "commissieContactinformatieType",
        "properties": [
            {
                "name": "Commissie",
                "type": "referentieLiteral"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Waarde",
                "type": "tokenType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "CommissieZetel": {
        "name": "CommissieZetel",
        "type": "commissieZetelType",
        "relations": [
            {
                "name": "CommissieZetelVastPersoon",
                "many": true
            },
            {
                "name": "CommissieZetelVervangerPersoon",
                "many": true
            },
            {
                "name": "CommissieZetelVastVacature",
                "many": true
            },
            {
                "name": "CommissieZetelVervangerVacature",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Commissie",
                "type": "referentieLiteral"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "CommissieZetelVastPersoon": {
        "name": "CommissieZetelVastPersoon",
        "type": "commissieZetelVastPersoonType",
        "properties": [
            {
                "name": "CommissieZetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "CommissieZetelVastVacature": {
        "name": "CommissieZetelVastVacature",
        "type": "commissieZetelVastVacatureType",
        "relations": [
            {
                "name": "CommissieZetel",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "CommissieZetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "CommissieZetelVervangerPersoon": {
        "name": "CommissieZetelVervangerPersoon",
        "type": "commissieZetelVervangerPersoonType",
        "properties": [
            {
                "name": "CommissieZetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "CommissieZetelVervangerVacature": {
        "name": "CommissieZetelVervangerVacature",
        "type": "commissieZetelVervangerVacatureType",
        "relations": [
            {
                "name": "CommissieZetel",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Commissiezetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "Fractie": {
        "name": "Fractie",
        "type": "fractieType",
        "relations": [
            {
                "name": "ActiviteitActor",
                "many": true
            },
            {
                "name": "CommissieZetelVastVacature",
                "many": true
            },
            {
                "name": "CommissieZetelVervangerVacature",
                "many": true
            },
            {
                "name": "DocumentActor",
                "many": true
            },
            {
                "name": "FractieAanvullendGegeven",
                "many": true
            },
            {
                "name": "FractieZetel",
                "many": true
            },
            {
                "name": "Stemming",
                "many": true
            },
            {
                "name": "ZaakActor",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Afkorting",
                "type": "tokenType"
            },
            {
                "name": "Naamnl",
                "type": "tokenType"
            },
            {
                "name": "Naamen",
                "type": "tokenType"
            },
            {
                "name": "Aantalzetels",
                "type": "unsignedIntType"
            },
            {
                "name": "Aantalstemmen",
                "type": "unsignedIntType"
            },
            {
                "name": "Datumactief",
                "type": "dateType"
            },
            {
                "name": "Datuminactief",
                "type": "dateType"
            }
        ]
    },
    "FractieAanvullendGegeven": {
        "name": "FractieAanvullendGegeven",
        "type": "fractieAanvullendGegevenType",
        "properties": [
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Waarde",
                "type": "tokenType"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "FractieZetel": {
        "name": "FractieZetel",
        "type": "fractieZetelType",
        "relations": [
            {
                "name": "FractieZetelPersoon",
                "many": true
            },
            {
                "name": "FractieZetelVacature",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Gewicht",
                "type": "intType"
            }
        ]
    },
    "FractieZetelPersoon": {
        "name": "FractieZetelPersoon",
        "type": "fractieZetelPersoonType",
        "properties": [
            {
                "name": "FractieZetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "FractieZetelVacature": {
        "name": "FractieZetelVacature",
        "type": "fractieZetelVacatureType",
        "properties": [
            {
                "name": "FractieZetel",
                "type": "referentieLiteral"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Van",
                "type": "dateType"
            },
            {
                "name": "Totenmet",
                "type": "dateType"
            }
        ]
    },
    "Activiteit": {
        "name": "Activiteit",
        "type": "activiteitType",
        "relations": [
            {
                "name": "ActiviteitActor",
                "many": true
            },
            {
                "name": "Agendapunt",
                "many": true
            },
            {
                "name": "Document",
                "many": true
            },
            {
                "name": "Reservering",
                "many": true
            },
            {
                "name": "Zaak",
                "many": true
            },
            {
                "name": "VoortgezetVanuit",
                "type": "Activiteit",
                "many": true
            },
            {
                "name": "VoortgezetIn",
                "type": "Activiteit",
                "many": true
            },
            {
                "name": "VervangenVanuit",
                "type": "Activiteit",
                "many": true
            },
            {
                "name": "VervangenDoor",
                "type": "Activiteit",
                "many": true
            },
            {
                "name": "Voortouwcommissie",
                "type": "Commissie",
                "many": false
            }
        ],
        "properties": [
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Nummer",
                "type": "stringType"
            },
            {
                "name": "Onderwerp",
                "type": "stringType"
            },
            {
                "name": "Datumsoort",
                "type": "tokenType"
            },
            {
                "name": "Datum",
                "type": "xs:dateTime"
            },
            {
                "name": "Aanvangstijd",
                "type": "xs:dateTime"
            },
            {
                "name": "Eindtijd",
                "type": "xs:dateTime"
            },
            {
                "name": "Locatie",
                "type": "stringType"
            },
            {
                "name": "Besloten",
                "type": "booleanType"
            },
            {
                "name": "Status",
                "type": "stringType"
            },
            {
                "name": "Vergaderjaar",
                "type": "vergaderjaarType"
            },
            {
                "name": "Kamer",
                "type": "stringType"
            },
            {
                "name": "Noot",
                "type": "stringType"
            },
            {
                "name": "Vrsnummer",
                "type": "stringType"
            },
            {
                "name": "Sidvoortouw",
                "type": "tokenType"
            },
            {
                "name": "Voortouwnaam",
                "type": "tokenType"
            },
            {
                "name": "Voortouwafkorting",
                "type": "tokenType"
            },
            {
                "name": "Voortouwkortenaam",
                "type": "tokenType"
            },
            {
                "name": "Voortouwcommissie",
                "type": "referentieLiteral"
            },
            {
                "name": "Aanvraagdatum",
                "type": "xs:dateTime"
            },
            {
                "name": "Datumverzoekeersteverlenging",
                "type": "xs:dateTime"
            },
            {
                "name": "Datummededelingeersteverlenging",
                "type": "xs:dateTime"
            },
            {
                "name": "Datumverzoektweedeverlenging",
                "type": "xs:dateTime"
            },
            {
                "name": "Datummededelingtweedeverlenging",
                "type": "xs:dateTime"
            },
            {
                "name": "Vervaldatum",
                "type": "xs:dateTime"
            },
            {
                "name": "Voortgezetvanuit",
                "type": "referentieLiteral"
            },
            {
                "name": "Vervangenvanuit",
                "type": "referentieLiteral"
            }
        ]
    },
    "ActiviteitActor": {
        "name": "ActiviteitActor",
        "type": "activiteitActorType",
        "properties": [
            {
                "name": "Activiteit",
                "type": "referentieLiteral"
            },
            {
                "name": "Actornaam",
                "type": "tokenType"
            },
            {
                "name": "Actorfractie",
                "type": "tokenType"
            },
            {
                "name": "Relatie",
                "type": "tokenType"
            },
            {
                "name": "Volgorde",
                "type": "xs:unsignedInt"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Spreektijd",
                "type": "tokenType"
            },
            {
                "name": "Sidactor",
                "type": "tokenType"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Commissie",
                "type": "referentieLiteral"
            }
        ]
    },
    "Agendapunt": {
        "name": "Agendapunt",
        "type": "agendapuntType",
        "relations": [
            {
                "name": "Besluit",
                "many": true
            },
            {
                "name": "Document",
                "many": true
            },
            {
                "name": "Zaak",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Activiteit",
                "type": "referentieLiteral"
            },
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Onderwerp",
                "type": "stringType"
            },
            {
                "name": "Aanvangstijd",
                "type": "dateTimeType"
            },
            {
                "name": "Eindtijd",
                "type": "dateTimeType"
            },
            {
                "name": "Volgorde",
                "type": "unsignedIntType"
            },
            {
                "name": "Rubriek",
                "type": "stringType"
            },
            {
                "name": "Noot",
                "type": "stringType"
            },
            {
                "name": "Status",
                "type": "tokenType"
            }
        ]
    },
    "Besluit": {
        "name": "Besluit",
        "type": "besluitType",
        "relations": [
            {
                "name": "Stemming",
                "many": true
            },
            {
                "name": "Zaak",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Agendapunt",
                "type": "referentieLiteral"
            },
            {
                "name": "Stemmingssoort",
                "type": "tokenType"
            },
            {
                "name": "Besluitsoort",
                "type": "tokenType"
            },
            {
                "name": "Besluittekst",
                "type": "stringType"
            },
            {
                "name": "Opmerking",
                "type": "stringType"
            },
            {
                "name": "Status",
                "type": "tokenType"
            },
            {
                "name": "Agendapuntzaakbesluitvolgorde",
                "type": "intType"
            },
            {
                "name": "Zaak",
                "type": "referentieLiteral"
            }
        ]
    },
    "Stemming": {
        "name": "Stemming",
        "type": "stemmingType",
        "properties": [
            {
                "name": "Besluit",
                "type": "referentieLiteral"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Fractiegrootte",
                "type": "unsignedIntType"
            },
            {
                "name": "Actornaam",
                "type": "tokenType"
            },
            {
                "name": "Actorfractie",
                "type": "tokenType"
            },
            {
                "name": "Vergissing",
                "type": "booleanType"
            },
            {
                "name": "Sidactorlid",
                "type": "tokenType"
            },
            {
                "name": "Sidactorfractie",
                "type": "tokenType"
            },
            {
                "name": "Persoon",
                "type": "referentieType"
            },
            {
                "name": "Fractie",
                "type": "referentieType"
            }
        ]
    },
    "Document": {
        "name": "Document",
        "type": "documentType",
        "relations": [
            {
                "name": "DocumentActor",
                "many": true
            },
            {
                "name": "DocumentVersie",
                "many": true
            },
            {
                "name": "Huidigedocumentversie",
                "many": true,
                "type": "DocumentVersie"
            },
            {
                "name": "Activiteit",
                "many": true
            },
            {
                "name": "Agendapunt",
                "many": true
            },
            {
                "name": "Kamerstukdossier",
                "many": true
            },
            {
                "name": "Zaak",
                "many": true
            },
            {
                "name": "BijlageDocument",
                "type": "Document",
                "many": true
            },
            {
                "name": "BronDocument",
                "type": "Document",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Documentnummer",
                "type": "tokenType"
            },
            {
                "name": "Titel",
                "type": "tokenType"
            },
            {
                "name": "Onderwerp",
                "type": "tokenType"
            },
            {
                "name": "Datum",
                "type": "xs:dateTime"
            },
            {
                "name": "Volgnummer",
                "type": "intType"
            },
            {
                "name": "Vergaderjaar",
                "type": "vergaderjaarType"
            },
            {
                "name": "Kamer",
                "type": "intType"
            },
            {
                "name": "Citeertitel",
                "type": "tokenType"
            },
            {
                "name": "Alias",
                "type": "tokenType"
            },
            {
                "name": "Datumregistratie",
                "type": "xs:dateTime"
            },
            {
                "name": "Datumontvangst",
                "type": "xs:dateTime"
            },
            {
                "name": "Aanhangselnummer",
                "type": "tokenType"
            },
            {
                "name": "Kenmerkafzender",
                "type": "tokenType"
            },
            {
                "name": "Huidigedocumentversie",
                "type": "referentieLiteral"
            },
            {
                "name": "Brondocument",
                "type": "referentieLiteral"
            },
            {
                "name": "Activiteit",
                "type": "referentieLiteral"
            },
            {
                "name": "Agendapunt",
                "type": "referentieLiteral"
            },
            {
                "name": "Zaak",
                "type": "referentieLiteral"
            },
            {
                "name": "Kamerstukdossier",
                "type": "referentieLiteral"
            },
            {
                "name": "Organisatie",
                "type": "tokenType"
            }
        ]
    },
    "DocumentActor": {
        "name": "DocumentActor",
        "type": "documentActorType",
        "properties": [
            {
                "name": "Document",
                "type": "referentieLiteral"
            },
            {
                "name": "Actornaam",
                "type": "tokenType"
            },
            {
                "name": "Actorfractie",
                "type": "tokenType"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Relatie",
                "type": "tokenType"
            },
            {
                "name": "Sidactor",
                "type": "tokenType"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Commissie",
                "type": "referentieLiteral"
            }
        ]
    },
    "DocumentVersie": {
        "name": "DocumentVersie",
        "type": "documentVersieType",
        "properties": [
            {
                "name": "Document",
                "type": "referentieLiteral"
            },
            {
                "name": "Status",
                "type": "tokenType"
            },
            {
                "name": "Versienummer",
                "type": "unsignedIntType"
            },
            {
                "name": "Bestandsgrootte",
                "type": "unsignedIntType"
            },
            {
                "name": "Extensie",
                "type": "tokenType"
            },
            {
                "name": "Datum",
                "type": "dateTimeType"
            }
        ]
    },
    "Kamerstukdossier": {
        "name": "Kamerstukdossier",
        "type": "kamerstukdossierType",
        "relations": [
            {
                "name": "Document",
                "many": true
            },
            {
                "name": "Zaak",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Titel",
                "type": "stringType"
            },
            {
                "name": "Citeertitel",
                "type": "stringType"
            },
            {
                "name": "Alias",
                "type": "stringType"
            },
            {
                "name": "Nummer",
                "type": "xs:unsignedInt"
            },
            {
                "name": "Toevoeging",
                "type": "xs:string"
            },
            {
                "name": "Hoogstevolgnummer",
                "type": "xs:int"
            },
            {
                "name": "Afgesloten",
                "type": "booleanType"
            },
            {
                "name": "Kamer",
                "type": "stringType"
            }
        ]
    },
    "Zaal": {
        "name": "Zaal",
        "type": "zaalType",
        "relations": [
            {
                "name": "Reservering",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Naam",
                "type": "tokenType"
            },
            {
                "name": "Syscode",
                "type": "intType"
            }
        ]
    },
    "Reservering": {
        "name": "Reservering",
        "type": "reserveringType",
        "relations": [
            {
                "name": "Activiteit",
                "many": true
            },
            {
                "name": "Zaal",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Statuscode",
                "type": "tokenType"
            },
            {
                "name": "Statusnaam",
                "type": "tokenType"
            },
            {
                "name": "Activiteitnummer",
                "type": "tokenType"
            },
            {
                "name": "Zaal",
                "type": "referentieLiteral"
            },
            {
                "name": "Activiteit",
                "type": "referentieLiteral"
            }
        ]
    },
    "Vergadering": {
        "name": "Vergadering",
        "type": "vergaderingType",
        "relations": [
            {
                "name": "Verslag",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Titel",
                "type": "tokenType"
            },
            {
                "name": "Zaal",
                "type": "tokenType"
            },
            {
                "name": "Vergaderjaar",
                "type": "vergaderjaar"
            },
            {
                "name": "Vergaderingnummer",
                "type": "xs:unsignedInt"
            },
            {
                "name": "Datum",
                "type": "xs:dateTime"
            },
            {
                "name": "Aanvangstijd",
                "type": "xs:dateTime"
            },
            {
                "name": "Sluiting",
                "type": "xs:dateTime"
            },
            {
                "name": "Kamer",
                "type": "tokenType"
            }
        ]
    },
    "Verslag": {
        "name": "Verslag",
        "type": "verslagType",
        "properties": [
            {
                "name": "Vergadering",
                "type": "referentieLiteral"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Status",
                "type": "tokenType"
            }
        ]
    },
    "Zaak": {
        "name": "Zaak",
        "type": "zaakType",
        "relations": [
            {
                "name": "ZaakActor",
                "many": true
            },
            {
                "name": "Activiteit",
                "many": true
            },
            {
                "name": "Agendapunt",
                "many": true
            },
            {
                "name": "Besluit",
                "many": true
            },
            {
                "name": "Document",
                "many": true
            },
            {
                "name": "Kamerstukdossier",
                "many": true
            },
            {
                "name": "GerelateerdVanuit",
                "type": "Zaak",
                "many": true
            },
            {
                "name": "GerelateerdNaar",
                "type": "Zaak",
                "many": true
            },
            {
                "name": "VervangenVanuit",
                "type": "Zaak",
                "many": true
            },
            {
                "name": "VervangenDoor",
                "type": "Zaak",
                "many": true
            }
        ],
        "properties": [
            {
                "name": "Nummer",
                "type": "tokenType"
            },
            {
                "name": "Soort",
                "type": "tokenType"
            },
            {
                "name": "Onderwerp",
                "type": "stringType"
            },
            {
                "name": "Gestartop",
                "type": "dateTimeType"
            },
            {
                "name": "Organisatie",
                "type": "stringType"
            },
            {
                "name": "Titel",
                "type": "stringType"
            },
            {
                "name": "Citeertitel",
                "type": "stringType"
            },
            {
                "name": "Alias",
                "type": "stringType"
            },
            {
                "name": "Grondslagvoorhang",
                "type": "stringType"
            },
            {
                "name": "Termijn",
                "type": "dateTimeType"
            },
            {
                "name": "Vergaderjaar",
                "type": "vergaderjaarType"
            },
            {
                "name": "Volgnummer",
                "type": "intType"
            },
            {
                "name": "Status",
                "type": "stringType"
            },
            {
                "name": "Huidigebehandelstatus",
                "type": "stringType"
            },
            {
                "name": "Afgedaan",
                "type": "booleanType"
            },
            {
                "name": "Grootproject",
                "type": "booleanType"
            },
            {
                "name": "Kabinetsappreciatie",
                "type": "stringType"
            },
            {
                "name": "Kamerstukdossier",
                "type": "referentieLiteral"
            },
            {
                "name": "Activiteit",
                "type": "referentieLiteral"
            },
            {
                "name": "Agendapunt",
                "type": "referentieLiteral"
            },
            {
                "name": "Gerelateerdvanuit",
                "type": "referentieLiteral"
            },
            {
                "name": "Vervangenvanuit",
                "type": "referentieLiteral"
            }
        ]
    },
    "ZaakActor": {
        "name": "ZaakActor",
        "type": "zaakActorType",
        "properties": [
            {
                "name": "Zaak",
                "type": "referentieLiteral"
            },
            {
                "name": "Actornaam",
                "type": "tokenType"
            },
            {
                "name": "Actorfractie",
                "type": "tokenType"
            },
            {
                "name": "Actorafkorting",
                "type": "tokenType"
            },
            {
                "name": "Functie",
                "type": "tokenType"
            },
            {
                "name": "Relatie",
                "type": "tokenType"
            },
            {
                "name": "Sidactor",
                "type": "tokenType"
            },
            {
                "name": "Persoon",
                "type": "referentieLiteral"
            },
            {
                "name": "Fractie",
                "type": "referentieLiteral"
            },
            {
                "name": "Commissie",
                "type": "referentieLiteral"
            }
        ]
    }
}