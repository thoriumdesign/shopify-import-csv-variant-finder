const {logCase} = require('./test-utils')
const {checkForLetters} = require('../src/main')

function testCheckForLetters() {
  const check0 = ( !checkForLetters("RG2020", "RG2020") ) ? "OK" : "FAILED"
  const check1 = ( checkForLetters("RG2020", "RG2020S") ) ? "OK" : "FAILED"
  const check2 = ( !checkForLetters("RG2020", "RG2020B") ) ? "OK" : "FAILED"
  const check3 = ( checkForLetters("RG2020", "RG2020C") ) ? "OK" : "FAILED"
  const check4 = ( checkForLetters("RG2020", "RG2020L") ) ? "OK" : "FAILED"
  const check5 = ( checkForLetters("RG2020", "RG2020XL") ) ? "OK" : "FAILED"
  const check6 = ( checkForLetters("RG2020", "RG2020XX") ) ? "OK" : "FAILED"
  const check7 = ( !checkForLetters("RG2020", "RG2020X0") ) ? "OK" : "FAILED"
  const check8 = ( checkForLetters("RG2020", "RG2020XXL") ) ? "OK" : "FAILED"
  const check9 = ( checkForLetters("RG2020", "RG2020-EX") ) ? "OK" : "FAILED"
  const check10 = ( !checkForLetters("RG2020", "RG2020-18") ) ? "OK" : "FAILED"
  const check11 = ( !checkForLetters(null, null) ) ? "OK" : "FAILED"
  const check12 = ( !checkForLetters(undefined, undefined) ) ? "OK" : "FAILED"
  const check13 = ( !checkForLetters(false, false) ) ? "OK" : "FAILED"
  const check14 = ( !checkForLetters(true, true) ) ? "OK" : "FAILED"
  const check15 = ( !checkForLetters(3, 3) ) ? "OK" : "FAILED"
  const check16 = ( !checkForLetters(new Date(), new Date()) ) ? "OK" : "FAILED"
  const check17 = ( !checkForLetters("RG2020", "RG2030") ) ? "OK" : "FAILED"
  const check18 = ( !checkForLetters("RG2020", "RG2030-18") ) ? "OK" : "FAILED"

  logCase("checkForLetters", check0, "0")
  logCase("checkForLetters", check1, "1")
  logCase("checkForLetters", check2, "2")
  logCase("checkForLetters", check3, "3")
  logCase("checkForLetters", check4, "4")
  logCase("checkForLetters", check5, "5")
  logCase("checkForLetters", check6, "6")
  logCase("checkForLetters", check7, "7")
  logCase("checkForLetters", check8, "8")
  logCase("checkForLetters", check9, "9")
  logCase("checkForLetters", check10, "10")
  logCase("checkForLetters", check11, "11")
  logCase("checkForLetters", check12, "12")
  logCase("checkForLetters", check13, "13")
  logCase("checkForLetters", check14, "14")
  logCase("checkForLetters", check15, "15")
  logCase("checkForLetters", check16, "16")
  logCase("checkForLetters", check17, "17")
  logCase("checkForLetters", check18, "18")
}

module.exports = {testCheckForLetters}