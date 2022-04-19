const fs = require('fs')
const csv = require('csv')

const {removeDuplicates} = require('./removeDuplicates')
const {createNewCSV, writeNewFile} = require('./createNewCSV')
const {checkForLetters} = require('./checkForLetters')
const {checkForDashes} = require('./checkForDashes')
const {trimSKU} = require('./trimSKU')

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
  console.log("Number of variant sets", variants.length)
  const non_variants = filterToNonVariants(variants, csv_entries)
  createCSVOfVariants(removeDuplicates(variants))
  createCSVOfNonVariants(removeDuplicates(non_variants))
}


function checkForVariants(all_products) {
  console.log("Number of products", all_products.length)
  const base_products = []
  for (const product of all_products) {
    const bundle = compileVariants(product["Variant SKU"], all_products)
    if (bundle) base_products.push( bundle )
  }
  const flattened_variants = flattenVariants(base_products)
  const no_duplicate_variants = removeDuplicates(flattened_variants)
  if (no_duplicate_variants.length > 1) return no_duplicate_variants
  return
}


function compileVariants(find_sku, all_products) {
  const base_product = all_products.find(p => p["Variant SKU"] == find_sku)
  if (!base_product) throw "Not being able to find the product in the source list is an issue"
  if ( /[bmBM]+$/.test(find_sku) ) return
  if ( !/[0-9]/.test(find_sku) ) return
  const variations = findVariationsOfSku(find_sku, all_products)
  if (variations.length == 0) return
  return [base_product, ...variations]
}


function findVariationsOfSku(sku, all_products) {
  return all_products.filter(product => {
    const base_sku = product["Variant SKU"]
    if (sku == base_sku) return false
    if (!base_sku || !sku) return false
    if (typeof base_sku !== 'string') return false
    if (typeof sku !== 'string') return false
    
    if ( /[bmBM]+$/.test(base_sku) ) return false
    if ( !/[0-9]/.test(base_sku) ) return false
    return (trimSKU(sku) == trimSKU(base_sku))
  })
}


function createCSVOfVariants(variants_object, test = false) {
  console.log("Number of variants", variants_object.length)
  createNewCSV( variants_object, 'variants.csv', test )
}
function createCSVOfNonVariants(non_variants, test = false) {
  console.log("Number of non-variants", non_variants.length)
  createNewCSV( non_variants, 'non-variants.csv', test )
}

function filterToNonVariants(variants_arr, all_products) {
  const non_variants = all_products.filter(product => {
    return !productIsAVariant(product, variants_arr)
  })
  return non_variants
}

function productIsAVariant(lookup_product, all_variants) {
  for (const variant of all_variants) {
    if (variant["Variant SKU"] == lookup_product["Variant SKU"]) return true
  }
  return false
}

function flattenVariants(variants_object) {
  if (typeof variants_object != "object") throw `variants_object is not an object, but is ${typeof variants_object}`
  const variants_array = Array.from(variants_object)
  return setParentMasterID(variants_array)
}

function setParentMasterID(variants_array) {
  const flattened_variants = []
  for (const [set_index, variant_set] of variants_array.entries()) {
    // console.log("set_index", set_index)
    // console.log("number of variants in variant_set", variant_set.length)

    for (const [index, variant] of variant_set.entries()) {
      const cloned_variant = Object.assign({}, variant)
      cloned_variant['Handle'] = set_index
      // if (index == 0) console.log(cloned_variant["Title"])
      cloned_variant['Option1 Value'] = cloned_variant['Title']
      if (index != 0) {
        cloned_variant['Title'] = ""
        cloned_variant['Vendor'] = ""
        cloned_variant['Published'] = ""
        cloned_variant['Option1 Name'] = ""
      }
      flattened_variants.push(cloned_variant)
    }
  }
  return flattened_variants
}


module.exports = {
  runApp,
  handleCSVData,
  checkForVariants,
  compileVariants,
  findVariationsOfSku,
  checkForLetters,
  checkForDashes,
  createNewCSV,
  writeNewFile,
  createCSVOfVariants,
  createCSVOfNonVariants,
  filterToNonVariants,
  flattenVariants,
}