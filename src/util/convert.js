export function convertBool(str) {
  return str === 'Yes' ? true : false
}

export function convertJson(arr) {
  const result = []

  if (arr && arr.length) {
    for (let item of arr) {
      let temp = {}
      temp.name = item
      result.push(temp)
    }
  }
  
  return result
}

export function flattenObj(arr) {
  const result = []

  if (arr && arr.length) {
    for (let item of arr) {
      result.push(item['name'])
    }
  }
  
  return result
}
