const {checkForDashes} = require('../src/main')

function testCheckForDashes() {
  const check0 = ( !checkForDashes("RG2020", "RG2020") ) ? "OK" : "FAILED"
  const check1 = ( !checkForDashes("RG2020", "RG2020S") ) ? "OK" : "FAILED"
  const check2 = ( !checkForDashes("RG2020", "RG2020B") ) ? "OK" : "FAILED"
  const check3 = ( !checkForDashes("RG2020", "RG2020C") ) ? "OK" : "FAILED"
  const check4 = ( !checkForDashes("RG2020", "RG2020L") ) ? "OK" : "FAILED"
  const check5 = ( !checkForDashes("RG2020", "RG2020XL") ) ? "OK" : "FAILED"
  const check6 = ( !checkForDashes("RG2020", "RG2020XX") ) ? "OK" : "FAILED"
  const check7 = ( !checkForDashes("RG2020", "RG2020X0") ) ? "OK" : "FAILED"
  const check8 = ( !checkForDashes("RG2020", "RG2020XXL") ) ? "OK" : "FAILED"
  const check9 = ( checkForDashes("RG2020", "RG2020-EX") ) ? "OK" : "FAILED"
  const check10 = ( checkForDashes("RG2020", "RG2020-18") ) ? "OK" : "FAILED"
  const check11 = ( !checkForDashes(null, null) ) ? "OK" : "FAILED"
  const check12 = ( !checkForDashes(undefined, undefined) ) ? "OK" : "FAILED"
  const check13 = ( !checkForDashes(false, false) ) ? "OK" : "FAILED"
  const check14 = ( !checkForDashes(true, true) ) ? "OK" : "FAILED"
  const check15 = ( !checkForDashes(3, 3) ) ? "OK" : "FAILED"
  const check16 = ( !checkForDashes(new Date(), new Date()) ) ? "OK" : "FAILED"
  const check17 = ( !checkForDashes("RG2020", "RG2030") ) ? "OK" : "FAILED"
  const check18 = ( !checkForDashes("RG2020", "RG2030-18") ) ? "OK" : "FAILED"
  console.log( `checkForDashes check #0: ${check0}` )
  console.log( `checkForDashes check #1: ${check1}` )
  console.log( `checkForDashes check #2: ${check2}` )
  console.log( `checkForDashes check #3: ${check3}` )
  console.log( `checkForDashes check #4: ${check4}` )
  console.log( `checkForDashes check #5: ${check5}` )
  console.log( `checkForDashes check #6: ${check6}` )
  console.log( `checkForDashes check #7: ${check7}` )
  console.log( `checkForDashes check #8: ${check8}` )
  console.log( `checkForDashes check #9: ${check9}` )
  console.log( `checkForDashes check #10: ${check10}` )
  console.log( `checkForDashes check #11: ${check11}` )
  console.log( `checkForDashes check #12: ${check12}` )
  console.log( `checkForDashes check #13: ${check13}` )
  console.log( `checkForDashes check #14: ${check14}` )
  console.log( `checkForDashes check #15: ${check15}` )
  console.log( `checkForDashes check #16: ${check16}` )
  console.log( `checkForDashes check #17: ${check17}` )
  console.log( `checkForDashes check #18: ${check18}` )
}

module.exports = {testCheckForDashes}