function trimSKU(sku) {
  const regexCheck = /[-a-zA-Z]+$/.exec(sku)
  const regexCheck2 = /-/.exec(sku)
  if (!regexCheck && !regexCheck2) return sku
  return (regexCheck) ? sku.slice(0, -regexCheck[0].length) : sku.split("-")[0]
}

module.exports = {trimSKU}