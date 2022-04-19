const {createNewCSV} = require('./createNewCSV')

function createCSVOfNonVariants(non_variants, test = false) {
  console.log("Number of non-variants", non_variants.length)
  createNewCSV( non_variants, 'non-variants.csv', test )
}

module.exports = {createCSVOfNonVariants}