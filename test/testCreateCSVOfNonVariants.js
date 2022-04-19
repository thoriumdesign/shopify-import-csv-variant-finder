const {logCase} = require('./test-utils')
const {createCSVOfNonVariants} = require('../src/main')

function testCreateCSVOfNonVariants(non_variants) {
  createCSVOfNonVariants(non_variants, true)
}

module.exports = { testCreateCSVOfNonVariants }