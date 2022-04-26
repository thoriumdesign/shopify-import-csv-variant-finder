function adjustProductTitle(title, sku, dimensions) {
  let new_title = title
  new_title = new_title.replace(sku, '')
  const capitalized = (dimensions.shape.length) ? capitalizeFirstLetter(dimensions.shape) : ""
  new_title = new_title.replace(dimensions.match, ` ${capitalized}`)
  if (dimensions.match) {
    // new_title = new_title.replace(dimensions.match, )
  }
  new_title = new_title.replaceAll("  ", " ")
  new_title = new_title.replaceAll("   ", " ")
  new_title = new_title.replaceAll("Round Round", "Round")
  new_title = new_title.replaceAll("Oval Oval", "Oval")
  new_title = new_title.replaceAll("Available in", "")
  new_title = new_title.replaceAll("available in", "")
  return new_title.trim()
}

module.exports = {adjustProductTitle}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}