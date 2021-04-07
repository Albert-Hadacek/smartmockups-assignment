const removeDuplicatesByProperty = (arr, prop) => {
  const resultsObj = arr.reduce((acc, curr) => {
    acc[curr[prop]] = curr
    return acc
  }, {})

  return Object.values(resultsObj)
}

export default removeDuplicatesByProperty
