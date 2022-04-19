const {logCase} = require('./test-utils')
const {checkForVariants} = require('../src/main')

function testCheckForVariants(all_test_products) {

  console.log(`\nStarting testCheckForVariants`)
  const results1 = checkForVariants(all_test_products)

  // const compare_res1 = results1.map(product_set => {
  //   return product_set.map(prod => prod["Variant SKU"]).join(",")
  // })
  // const test1 = (JSON.stringify(compare_res1) === JSON.stringify(check_products))
  // const test_case_1 = test1 ? "OK" : "FAILED"

  // logCase("testCheckForVariants", test_case_1, "1")

  return results1
}

const check_products = [
  'RG1146,RG1146-O',
  'RG1211,RG1211-18,RG1211-24,RG1211-30',
  'RG1248,RG1248-18,RG1248-24,RG1248-30,RG1248F',
  'RG1353,RG1353-24,RG1353-30,RG1353-O,RG1353F',
  'RG9131,RG9131S'
]

module.exports = {testCheckForVariants}


