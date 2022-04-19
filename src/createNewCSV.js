const fs = require('fs') // const fsPromises = fs.promises;
const csv = require('csv')

/**
 * Turn a JS object into a CSV file
 * @param {Object} data - The JS object to turn into a file
 * @param {String} file_name - The desired name of the CSV file
 */
function createNewCSV( data, file_name, test ) {
  if (typeof data != "object")
    throw `createNewCSV 'data' is not an object, but is ${typeof data}`
  csv.stringify(data, { header: true }, async (err, str) => {
    await writeNewFile(err, str, file_name, test)
  })
}


async function writeNewFile( err, csv_string, file_name = 'someData.csv', test = false ) {
  // console.log("test writeNewFile", err, csv_string)
  if (!file_name.endsWith(".csv")) file_name = `${file_name}.csv`
  const prefix = test ? './test/' : './data/'
  const full_file_name = `${prefix}${file_name}`
  fs.writeFile(full_file_name, csv_string, (error) => {
    if (error) console.error(error)
    if (!error) console.log("Created file", full_file_name)
  })
}

module.exports = { createNewCSV, writeNewFile }