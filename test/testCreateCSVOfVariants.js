const {logCase} = require('./test-utils')
const {createCSVOfVariants} = require('../src/main')

function testCreateCSVOfVariants(variants) {
  createCSVOfVariants(variants, true)
}

module.exports = { testCreateCSVOfVariants }