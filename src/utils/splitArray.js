const splitArray = (arr, step) => {
  var result = []
  for (var i = 0; i < arr.length; i += step) {
    result.push(arr.slice(i, i + step))
  }
  return result
}

export default splitArray
