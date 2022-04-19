const fs = require('fs')
const csv = require('csv')

const {removeDuplicates} = require('./removeDuplicates')
const {checkForLetters} = require('./checkForLetters')
const {checkForDashes} = require('./checkForDashes')
const {trimSKU} = require('./trimSKU')
const {matchesSkipPattern} = require('./matchesSkipPattern')
const {createCSVOfVariants} = require('./createCSVOfVariants')
const {createCSVOfNonVariants} = require('./createCSVOfNonVariants')

function runApp() {
  const entries = []
  fs.createReadStream('./data/products.csv')
    .pipe(csv.parse({columns: true}))
    .on('data', (row) => entries.push(row))
    .on('end', () => handleCSVData(entries))
}

function handleCSVData(csv_entries) {
  console.log('CSV file successfully processed. Row count:', csv_entries.length)
  const variants = checkForVariants(csv_entries)
  if (typeof variants == "undefined") throw "Variants is undefined in handleCSVData"
  const non_variants = filterToNonVariants(variants, csv_entries)
  createCSVOfVariants(variants)
  createCSVOfNonVariants(non_variants)
}


function checkForVariants(all_products) {
  const base_products = []
  for (const product of all_products) {
    const bundle = compileVariants(product["Variant SKU"], all_products, product)
    if (bundle) base_products.push( bundle )
  }
  const flattened_variants = flattenVariants(base_products)
  const no_duplicate_variants = removeDuplicates(flattened_variants)
  if (no_duplicate_variants.length > 1) return no_duplicate_variants
  return
}


function compileVariants(find_sku, all_products, base_product) {
  if (matchesSkipPattern(find_sku)) return
  const variations = findVariationsOfSku(find_sku, all_products)
  if (variations.length == 0) return
  return [base_product, ...variations]
}


function findVariationsOfSku(sku, all_products) {
  return all_products.filter(product => {
    const base_sku = product["Variant SKU"]
    if (!sku || !base_sku) return false
    if (sku == base_sku) return false
    if (typeof base_sku !== 'string') return false
    if (typeof sku !== 'string') return false
    if (matchesSkipPattern(base_sku)) return false
    return (trimSKU(sku) == trimSKU(base_sku))
  })
}

function filterToNonVariants(variants_arr, all_products) {
  const non_variants = all_products.filter(product => {
    return !productIsAVariant(product, variants_arr)
  })
  return removeDuplicates(non_variants)
}

function productIsAVariant(lookup_product, all_variants) {
  for (const variant of all_variants) {
    if (variant["Variant SKU"] == lookup_product["Variant SKU"]) return true
  }
  return false
}

function flattenVariants(variants_obj) {
  if (typeof variants_obj != "object") {
    throw `variants_obj is not an object, but is ${typeof variants_obj}`
  }
  const variants_array = Array.from(variants_obj)
  return setVariantHandle(variants_array)
}

function setVariantHandle(variants_array) {
  const flattened_variants = []
  for (const [set_index, variant_set] of variants_array.entries()) {
    for (const [index, variant] of variant_set.entries()) {
      flattened_variants.push(
        createFormattedVariant(variant, set_index, index)
      )
    }
  }
  return flattened_variants
}

function createFormattedVariant(variant, handle_id, variant_index) {
  const cloned_variant = Object.assign({}, variant)
  cloned_variant['Handle'] = handle_id
  cloned_variant['Option1 Value'] = cloned_variant['Title']
  if (variant_index != 0) {
    cloned_variant['Title'] = ""
    cloned_variant['Vendor'] = ""
    cloned_variant['Published'] = ""
    cloned_variant['Option1 Name'] = ""
  }
  return cloned_variant
}


module.exports = {
  runApp,
  handleCSVData,
  checkForVariants,
  compileVariants,
  findVariationsOfSku,
  checkForLetters,
  checkForDashes,
  createCSVOfVariants,
  createCSVOfNonVariants,
  filterToNonVariants,
  flattenVariants,
}