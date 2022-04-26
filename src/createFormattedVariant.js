const Variant = require('./variant')

function createFormattedVariant(orig_variant, handle_id, variant_index) {
  const variant = new Variant(orig_variant, handle_id, variant_index)
  return variant.data
}

module.exports = {createFormattedVariant}