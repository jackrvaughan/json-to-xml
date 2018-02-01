function jsonToXml(obj) {
    // create xml string
    var xml = '';

    //loop through and add each property as a an xml tag as well as sub properties
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }

        if (obj[prop] == undefined)
            continue;

        xml += "<" + prop + ">";
        if (typeof obj[prop] == "object")
            xml += objectToXml(new Object(obj[prop]));
        else
            xml += obj[prop];

        xml += "</" + prop + ">";
    }

    // searches the string for numbers surrounded by underscores and removes them; used for multiple properties in the json that are set up an an object instead of an array
    let reducedXML = xml.replace(/([_]\d)\w+/g, '');

    return reducedXML;
}
