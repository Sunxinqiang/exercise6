module.exports = function (str) {
  // TODO
  // return /^\d+\.jpe{0,1}g$/.test(str)
  return /^\d+\.(?:jpg|jpeg)$/.test(str)
}