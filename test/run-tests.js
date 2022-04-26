const fs = require('fs')
const csv = require('csv')
const {testFindVariationsOfSku} = require('./testFindVariationsOfSku')
const {testCheckForVariants} = require('./testCheckForVariants')
const {testCreateCSVOfVariants} = require('./testCreateCSVOfVariants')
const {testCreateCSVOfNonVariants} = require('./testCreateCSVOfNonVariants')

const {filterToNonVariants} = require('../src/main')

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
  testFindVariationsOfSku(testEntries)
  const variants = testCheckForVariants(testEntries)
  const non_variants = filterToNonVariants(variants, testEntries)
  testCreateCSVOfVariants(variants)
  testCreateCSVOfNonVariants(non_variants)
}


loadTests()