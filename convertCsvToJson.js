const csvtojson = require('csvtojson');
const fs = require('fs');

//giving path
const csvFilePath = 'Sample-Data-Screener.csv';

// Path to the output JSON file
const jsonFilePath = 'data.json';

//conversion of csv to json//
csvtojson()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // Write JSON data to file
    fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file created successfully');
      }
    });
  })
  .catch((err) => {
    console.error('Error converting CSV to JSON:', err);
  });
