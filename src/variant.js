const {locateDimensions} = require('./locateDimensions')
const {adjustProductTitle} = require('./adjustProductTitle')

class Variant {
  data = {}
  dimensions = { found: false, shape: '', x: '', y: '', match: '' }
  title_dimensions = null
  body_dimensions = null

  constructor(variant_obj, handle_id, variant_index) {
    this.data = Object.assign({}, variant_obj)
    this.data['Handle'] = handle_id
    this.data['Option1 Value'] = "Default Title"
    this.data['Option2 Name'] = "Size"
    this.getDimensions()
    this.setSize()
    if (variant_index == 0) this.stripDimensions()
    if (variant_index > 0) this.setNotFirstVariant()
    this.dataCleanup()
  }

  // Methods
  getDimensions() {
    const title = this.data["Title"]
    const body = this.data["Body (HTML)"]

    const dimensions = locateDimensions(title)
    this.title_dimensions = (dimensions.found) ? dimensions : null

    const body_dimensions = locateDimensions(body)
    this.body_dimensions = (body_dimensions.found) ? body_dimensions : null

    this.dimensions = (dimensions.found) ? dimensions : body_dimensions
  }
  
  setSize() {
    this.data["Option2 Value"] = setSizeAndShape(
      this.dimensions.shape,
      this.dimensions.x,
      this.dimensions.y,
    )
  }

  setNotFirstVariant() {
    this.data['Title'] = ""
    this.data['Body (HTML)'] = ""
    this.data['Vendor'] = ""
    this.data['Published'] = ""
  }

  stripDimensions() {
    if (this.title_dimensions != null) {
      this.data['Title'] = adjustProductTitle(
        this.data['Title'],
        this.data['Variant SKU'],
        this.title_dimensions
      )
    }
    if (this.body_dimensions != null) {
      this.data['Body (HTML)'] = adjustProductTitle(
        this.data['Body (HTML)'],
        this.data['Variant SKU'],
        this.body_dimensions
      )
    }
  }

  dataCleanup() {
    this.data['Title'] = this.data['Title'].replaceAll('   ', ' ')
    this.data['Title'] = this.data['Title'].replaceAll('  ', ' ')
    this.data['Title'] = this.data['Title'].replaceAll('Round Round', 'Round')
    this.data['Title'] = this.data['Title'].replaceAll('Oval Oval', 'Oval')
    this.data['Title'] = this.data['Title'].trim()
    this.data['Body (HTML)'] = this.data['Body (HTML)'].replaceAll('   ', ' ')
    this.data['Body (HTML)'] = this.data['Body (HTML)'].replaceAll('  ', ' ')
    this.data['Body (HTML)'] = this.data['Body (HTML)'].replaceAll('Round Round', 'Round')
    this.data['Body (HTML)'] = this.data['Body (HTML)'].replaceAll('Oval Oval', 'Oval')
    this.data['Body (HTML)'] = this.data['Body (HTML)'].trim()
  }
}

module.exports = Variant

function setSizeAndShape(shape, x, y) {
  if (shape == "round") return `${x}" Round`
  if (shape == "oval") return `${x}"x${y}" Oval`
  if (shape == "" && x && y) return `${x}"x${y}"`
  return ""
}