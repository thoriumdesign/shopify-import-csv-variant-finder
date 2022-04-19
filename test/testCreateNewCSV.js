const {logCase} = require('./test-utils')
const {createNewCSV} = require('../src/main')

function testCreateNewCSV(test_products, file_name) {
  try {
    createNewCSV("test", "test-nothing.csv")
    logCase("testCreateNewCSV", "FAILED", "1")
  } catch(error) {
    console.error(error)
    logCase("testCreateNewCSV", "OK", "1")
  }

  try {
    createNewCSV([
      {
        "First Name": "John",
        "Last Name": "Smith",
      },
      {
        "First Name": "Alice",
        "Last Name": "Applebee",
      }
    ], "test-small.csv", true)
    logCase("testCreateNewCSV", "OK", "2")
  } catch(error) {
    console.error(error)
    logCase("testCreateNewCSV", "FAILED", "2")
  }

  // try {
  //   createNewCSV()
  //   logCase("testCreateNewCSV", "OK", "1")
  // } catch(error) {
  //   console.error(error)
  //   logCase("testCreateNewCSV", "FAILED", "1")
  // }

  // try {
  //   createNewCSV()
  //   logCase("testCreateNewCSV", "OK", "1")
  // } catch(error) {
  //   console.error(error)
  //   logCase("testCreateNewCSV", "FAILED", "1")
  // }
}

module.exports = {testCreateNewCSV}