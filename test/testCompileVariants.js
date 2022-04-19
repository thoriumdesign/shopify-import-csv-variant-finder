const {logCase} = require('./test-utils')
const {compileVariants} = require('../src/main')

function testCompileVariants(test_products) {
  const test1 = compileVariants("RG1146", test_products)
  const test2 = compileVariants("RG1211", test_products)
  const test3 = compileVariants("RG1248", test_products)
  const test4 = compileVariants("RG1353", test_products)
  const test5 = compileVariants("RG9131", test_products)

  const test6 = compileVariants("RG1214", test_products)
  const test7 = compileVariants("RG1215", test_products)
  const test8 = compileVariants("RG913", test_products)
  const test9 = compileVariants("RG9130", test_products)
  const test10 = compileVariants("RG9132S", test_products)
  const test11 = compileVariants("RG9133S", test_products)

  // const test_case_1 = (test1 === "RG1146,RG1146-O") ? "OK" : "FAILED"
  const test_case_1 = (
    test1[0]["Variant SKU"] === "RG1146" 
    && test1[1]["Variant SKU"] === "RG1146-O"
  ) ? "OK" : "FAILED"
  
  // const test_case_2 = (
  //   test2 === "RG1211,RG1211-18,RG1211-24,RG1211-30" 
  // ) ? "OK" : "FAILED"
  const test_case_2 = (
    test2[0]["Variant SKU"] === "RG1211" 
    && test2[1]["Variant SKU"] === "RG1211-18"
    && test2[2]["Variant SKU"] === "RG1211-24"
    && test2[3]["Variant SKU"] === "RG1211-30"
  ) ? "OK" : "FAILED"

  // const test_case_3 = (
  //   test3 === "RG1248,RG1248-18,RG1248-24,RG1248-30,RG1248F" 
  // ) ? "OK" : "FAILED"
  const test_case_3 = (
    test3[0]["Variant SKU"] === "RG1248" 
    && test3[1]["Variant SKU"] === "RG1248-18"
    && test3[2]["Variant SKU"] === "RG1248-24"
    && test3[3]["Variant SKU"] === "RG1248-30"
    && test3[4]["Variant SKU"] === "RG1248F"
  ) ? "OK" : "FAILED"

  // const test_case_4 = (
  //   test4 === "RG1353,RG1353-24,RG1353-30,RG1353-O,RG1353F" 
  // ) ? "OK" : "FAILED"
  const test_case_4 = (
    test4[0]["Variant SKU"] === "RG1353" 
    && test4[1]["Variant SKU"] === "RG1353-24"
    && test4[2]["Variant SKU"] === "RG1353-30"
    && test4[3]["Variant SKU"] === "RG1353-O"
    && test4[4]["Variant SKU"] === "RG1353F"
  ) ? "OK" : "FAILED"

  // const test_case_5 = (test5 === "RG9131,RG9131S") ? "OK" : "FAILED"
  const test_case_5 = (
    test5[0]["Variant SKU"] === "RG9131" 
    && test5[1]["Variant SKU"] === "RG9131S"
  ) ? "OK" : "FAILED"

  const test_case_6 = (typeof test6 === "undefined") ? "OK" : "FAILED"
  const test_case_7 = (typeof test7 === "undefined") ? "OK" : "FAILED"
  const test_case_8 = (typeof test8 === "undefined") ? "OK" : "FAILED"
  const test_case_9 = (typeof test9 === "undefined") ? "OK" : "FAILED"
  const test_case_10 = (typeof test10 === "undefined") ? "OK" : "FAILED"
  const test_case_11 = (typeof test11 === "undefined") ? "OK" : "FAILED"

  console.log("\n# Starting testCompileVariants")

  logCase("testCompileVariants", test_case_1, "1")
  logCase("testCompileVariants", test_case_2, "2")
  logCase("testCompileVariants", test_case_3, "3")
  logCase("testCompileVariants", test_case_4, "4")
  logCase("testCompileVariants", test_case_5, "5")
  logCase("testCompileVariants", test_case_6, "6")
  logCase("testCompileVariants", test_case_7, "7")
  logCase("testCompileVariants", test_case_8, "8")
  logCase("testCompileVariants", test_case_9, "9")
  logCase("testCompileVariants", test_case_10, "10")
  logCase("testCompileVariants", test_case_11, "11")
}

module.exports = {testCompileVariants}


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
