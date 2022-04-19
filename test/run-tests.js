const fs = require('fs')
const csv = require('csv')
const {testCheckForLetters} = require('./testCheckForLetters')
const {testCheckForDashes} = require('./testCheckForDashes')
const {testFindVariationsOfSku} = require('./testFindVariationsOfSku')
const {testCompileVariants} = require('./testCompileVariants')
const {testCheckForVariants} = require('./testCheckForVariants')
const {testCreateCSVOfVariants} = require('./testCreateCSVOfVariants')
const {testCreateCSVOfNonVariants} = require('./testCreateCSVOfNonVariants')
const {secondaryCatchVariants, filterToNonVariants, flattenVariants} = require('../src/main')

/**
 * Tests
 */

// Load sample data for testing, then run tests
function loadTests() {
  const testEntries = []
  fs.createReadStream('./test/testProducts.csv')
  .pipe(csv.parse({columns: true}))
  .on('data', (row) => testEntries.push(row))
  .on('end', () => runTests(testEntries))
}

// Run all our tests, then start the app
function runTests(testEntries) {
  testCheckForLetters()
  testCheckForDashes()
  testFindVariationsOfSku(testEntries)
  testCompileVariants(testEntries)
  const variants = testCheckForVariants(testEntries)
  const non_variants = filterToNonVariants(variants, testEntries)
  testCreateCSVOfVariants(variants)
  testCreateCSVOfNonVariants(non_variants)
}


loadTests()