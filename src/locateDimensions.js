function locateDimensions(title) {
  const foundShape = findShape(title)

  const regexCheck = /[\s][0-9\.\/]{1,5}["]?[\s]?[xX]{1}[\s]?[0-9\.\/]{1,5}["]?/
  const results = regexCheck.exec(title)
  if (results) {
    const dimensions = results[0].trim().replaceAll('"', "")
    const separator = /[xX]/.exec(dimensions)
    if (!separator) return
    const xy = dimensions.split(separator[0])
    const x = xy[0]
    const y = xy[1]
    const shape = (foundShape) ? foundShape : (( x == y) ? "round" : "")
    return {found: true, shape, x, y, match: results[0]}
  }

  const regexCheckRound1 = /\s{1}[0-9]{1,2}["]?(\sin)?(\sRound)/
  const regexCheckRound2 = /\s{1}[0-9]{1,2}["]?(\sin)?(\sRd)/
  const regexCheckRound3 = /(\sRound)\s{1}[0-9]{1,2}["]?(\sin)?/
  const regexCheckRound4 = /\s{1}[0-9]{1,2}(1\/2)?["]?\s?[xX]\s?[0-9]{1,2}(1\/2)?["]?(\sRound)?/

  const checkRound1 = regexCheckRound1.exec(title)
  if (checkRound1) return returnRoundDimensions(checkRound1)

  const checkRound2 = regexCheckRound2.exec(title)
  if (checkRound2) return returnRoundDimensions(checkRound2)

  const checkRound3 = regexCheckRound3.exec(title)
  if (checkRound3) return returnRoundDimensions(checkRound3)

  const checkRound4 = regexCheckRound4.exec(title)
  if (checkRound4) return returnRoundDimensions(checkRound4)

  return {
    found: false,
    shape: "",
    x: 0,
    y: 0,
    match: "",
    title: title,
  }
}

module.exports = {locateDimensions}


function returnRoundDimensions(checker) {
  const diameter = /[0-9]{1,2}/.exec(checker[0])
  return {
    found: true,
    shape: "round",
    x: diameter[0],
    y: diameter[0],
    match: checker[0],
  }
}

function findShape(title) {
  if (/([rR]{1}ound)/.test(title)) return "round"
  if (/([oO]{1}val)/.test(title)) return "oval"
  return false
}