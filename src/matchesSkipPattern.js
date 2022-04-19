function matchesSkipPattern(sku) {
  if ( /[bmBM]+$/.test(sku) ) return true // B and M seem not to be variants
  if ( /[O]$/.test(sku) ) return true // Oval signs, stay as their own product
  if ( /[F]$/.test(sku) ) return true // Flange, stay as their own product
  if ( !/[0-9]/.test(sku) ) return true
  return false
}

module.exports = {matchesSkipPattern}