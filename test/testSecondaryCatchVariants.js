const {logCase} = require('./test-utils')
const {secondaryCatchVariants} = require('../src/main')

function testSecondaryCatchVariants(pre_filtered_products) {
  const results = secondaryCatchVariants(pre_filtered_products)

  const tests = [
    (results[0]['Variant SKU'] == 'RG0000-18'),
    (results[1]['Variant SKU'] == 'RG0000-O'),
    (results[2]['Variant SKU'] == 'RG0001-30'),
    (results[3]['Variant SKU'] == 'RG0001F'),
  ]

  for (const [index, test] of tests.entries()) {
    const status = test ? "OK" : "FAILED"
    logCase("testSecondaryCatchVariants", status, index)
  }
}

module.exports = {testSecondaryCatchVariants}