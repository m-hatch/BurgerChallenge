export function convertBool(str) {
  return str === 'Yes' ? true : false
}

export function reverseBool(bool) {
  return bool ? 'Yes' : 'No'
}

export function stringToObj(arr) {
  return arr.map(str => {
    return { name: str }
  })
}

export function objectToString(arr) {
  return arr.map(obj => obj.name)
}

export function getCommaList(list, prop) {
  return list.map((obj, i, arr) => 
    (i < arr.length - 1) ? `${obj[prop]}, ` : obj[prop])
}
