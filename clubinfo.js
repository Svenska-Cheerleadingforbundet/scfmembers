const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

async function clubInfo(fromclub, toclub){
    // Read the content
    const content = await fs.readFile(`${__dirname}/data/clubs.csv`)
    // Parse the CSV content
    const records = parse(content,{
        delimiter: ';',
        columns: true,
        on_record: (record, {lines}) => {
            return {
                name: record['﻿Organisationsnamn'],
                city: record['Kommun'],
                email: record['E-post'],
                website: record['Hemsida']
            };
        }
      })
    

    return records;
}

module.exports = { clubInfo }