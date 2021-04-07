const deepFlatten = (arr) =>
  arr.reduce((acc, curr) => {
    acc.push({ title: curr.title, slug: curr.slug })
    if (Array.isArray(curr.children)) {
      acc = [...acc, ...deepFlatten(curr.children)]
    }
    return acc
  }, [])

export default deepFlatten
