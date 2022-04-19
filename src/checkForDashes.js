function checkForDashes(sku, base_sku) {
  if (!base_sku) return false
  if (typeof base_sku !== 'string') return false

  if ( /-/.test(base_sku) ) return (base_sku.split("-")[0] === sku)
}

module.exports = {checkForDashes}