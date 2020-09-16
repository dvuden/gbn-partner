export default {
    loading: false,
    result: "state result",
    list: [],
    orderDir: "Desc",
    orderCol: "Id",
    kvknummer: "0",
    // partner: {
    //     "id": -1,
    //     "bedrijf": "",
    //     "bedrijftype": "",
    //     "straat": "",
    //     "huisnummer": "",
    //     "huisnummertoevoeging": "",
    //     "postcode": "",
    //     "woonplaats": "",
    //     "email": "",
    //     "telefoon": "",
    //     "kvknummer": "",
    //     "btwnummer": "",
    //     "attrext": "",
    //     "createdAt": "",
    //     "updatedAt": ""
    // },
    partner: {},
    // mailbody: {
    //     to: "",
    //     subject: "",
    //     body: ""
    // },
    columns: [
        {
            name: "Id",
            property: "ID",
            visible: true
        },
        {
            name: "bedrijf",
            property: "Bedrijf",
            visible: true
        },
        {
            name: "bedrijftype",
            property: "Bedrijftype",
            visible: true
        },
        {
            name: "straat",
            property: "Straat",
            visible: true
        },
        {
            name: "huisnummer",
            property: "Huisnummer",
            visible: true
        },
        {
            name: "huisnummertoevoeging",
            property: "Huisnummertoevoeging",
            visible: true
        },
        {
            name: "postcode",
            property: "Postcode",
            visible: true
        },
        {
            name: "woonplaats",
            property: "Woonplaats",
            visible: true
        },
        {
            name: "email",
            property: "Email",
            visible: true
        },
        {
            name: "telefoon",
            property: "Telefoon",
            visible: true
        },
        {
            name: "kvknummer",
            property: "KVK-nummer",
            visible: true
        },
        {
            name: "btwnummer",
            property: "BTW-nummer",
            visible: true
        },
        {
            name: "attrext",
            property: "attrext",
            visible: true
        },
        {
            name: "createdBy",
            property: "createdBy",
            visible: true
        },
        {
            name: "updatedBy",
            property: "updatedBy",
            visible: true
        },
        {
            name: "createdAt",
            property: "createdAt",
            visible: true
        },
        {
            name: "updatedAt",
            property: "updatedAt",
            format: "boolean",
            visible: false
        }
    ]
};
