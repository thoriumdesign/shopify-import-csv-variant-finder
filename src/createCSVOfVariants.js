const {createNewCSV} = require('./createNewCSV')

function createCSVOfVariants(variants_object, test = false) {
  console.log("Number of variants", variants_object.length)
  createNewCSV( variants_object, 'variants.csv', test )
}

module.exports = {createCSVOfVariants}