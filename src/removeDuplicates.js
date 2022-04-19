function removeDuplicates(array_of_products) {
  const starting_amount = array_of_products.length
  const non_duplicates = array_of_products.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t['Variant SKU'] === value['Variant SKU']
    ))
  )
  const ending_amount = non_duplicates.length
  const count = starting_amount - ending_amount
  console.log("Number of duplicates in the data: ", count)
  return non_duplicates
}

module.exports = { removeDuplicates }