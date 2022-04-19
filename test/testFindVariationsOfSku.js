const {logCase} = require('./test-utils')
const {findVariationsOfSku} = require('../src/main')

function testFindVariationsOfSku(test_products) {
  const test1 = findVariationsOfSku("RG1146", test_products)
  const test2 = findVariationsOfSku("RG1211", test_products)
  const test3 = findVariationsOfSku("RG1248", test_products)
  const test4 = findVariationsOfSku("RG1353", test_products)
  const test5 = findVariationsOfSku("RG9131", test_products)

  const test6 = findVariationsOfSku("RG1214", test_products)
  const test7 = findVariationsOfSku("RG1215", test_products)
  const test8 = findVariationsOfSku("RG913", test_products)
  const test9 = findVariationsOfSku("RG9130", test_products)
  const test10 = findVariationsOfSku("RG9132S", test_products)
  const test11 = findVariationsOfSku("RG9133S", test_products)

  // console.log(test1,test6)
  // console.log(test2)
  // console.log(test6)

  const test_case_1 = (test1[0] === undefined) ? "OK" : "FAILED"
  const test_case_2 = (
    test2[0]["Variant SKU"] === "RG1211-18" &&
    test2[1]["Variant SKU"] === "RG1211-24" &&
    test2[2]["Variant SKU"] === "RG1211-30"
  ) ? "OK" : "FAILED"
  const test_case_3 = (
    test3[0]["Variant SKU"] === "RG1248-18" &&
    test3[1]["Variant SKU"] === "RG1248-24" &&
    test3[2]["Variant SKU"] === "RG1248-30"
  ) ? "OK" : "FAILED"
  const test_case_4 = (
    test4[0]["Variant SKU"] === "RG1353-24" &&
    test4[1]["Variant SKU"] === "RG1353-30"
  ) ? "OK" : "FAILED"
  const test_case_5 = (test5[0]["Variant SKU"] === "RG9131S") ? "OK" : "FAILED"

  const test_case_6 = (test6.length === 0) ? "OK" : "FAILED"
  const test_case_7 = (test7.length === 0) ? "OK" : "FAILED"
  const test_case_8 = (test8.length === 0) ? "OK" : "FAILED"
  const test_case_9 = (test9.length === 0) ? "OK" : "FAILED"
  const test_case_10 = (test10.length === 0) ? "OK" : "FAILED"
  const test_case_11 = (test11.length === 0) ? "OK" : "FAILED"

  console.log("\n# Starting testFindVariationsOfSku")

  logCase("testFindVariationsOfSku", test_case_1, "1")
  logCase("testFindVariationsOfSku", test_case_2, "2")
  logCase("testFindVariationsOfSku", test_case_3, "3")
  logCase("testFindVariationsOfSku", test_case_4, "4")
  logCase("testFindVariationsOfSku", test_case_5, "5")
  logCase("testFindVariationsOfSku", test_case_6, "6")
  logCase("testFindVariationsOfSku", test_case_7, "7")
  logCase("testFindVariationsOfSku", test_case_8, "8")
  logCase("testFindVariationsOfSku", test_case_9, "9")
  logCase("testFindVariationsOfSku", test_case_10, "10")
  logCase("testFindVariationsOfSku", test_case_11, "11")
}

module.exports = {testFindVariationsOfSku}


const product_1 = [
  {"Variant SKU": "RG1146"},
  {"Variant SKU": "RG1146-O"}
]

const product_2 = [
  {"Variant SKU": "RG1211"},
  {"Variant SKU": "RG1211-18"},
  {"Variant SKU": "RG1211-24"},
  {"Variant SKU": "RG1211-30"},
]

const product_3 = [
  {"Variant SKU": "RG1248"},
  {"Variant SKU": "RG1248-18"},
  {"Variant SKU": "RG1248-24"},
  {"Variant SKU": "RG1248-30"},
  {"Variant SKU": "RG1248F"},
]

const product_4 = [
  {"Variant SKU": "RG1353"},
  {"Variant SKU": "RG1353-24"},
  {"Variant SKU": "RG1353-30"},
  {"Variant SKU": "RG1353-O"},
  {"Variant SKU": "RG1353F"},
]

const product_5 = [
  {"Variant SKU": "RG9131"},
  {"Variant SKU": "RG9131S"},
]
