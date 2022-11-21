const xml = require('xml-csv');
const fs = require('fs');

xml({
    source: fs.createReadStream('./teste.xml'),
    rootXMLElement: 'Node',
    headerMap: [
        ['pais', 'PAIS'],
        ['capital', 'CAPITAL'],
    ]
}).pipe(fs.createWriteStream('./teste_1.csv'));