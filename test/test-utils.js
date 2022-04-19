function logCase(name, res, num) {
  // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
  const color = res === "OK" ? "\x1b[32m" : "\x1b[31m"
  console.log(`${name} test ${num}: ${color}${res}\x1b[0m`)
}

module.exports = {logCase}