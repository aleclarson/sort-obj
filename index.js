
function sortObject(obj, cmp) {
  let keys = Object.keys(obj)
  if (cmp) {
    keys.sort((a, b) => cmp(a, b, obj))
  } else {
    keys.sort()
  }
  let clone = obj.constructor ? {} : Object.create(null)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    clone[key] = obj[key]
  }
  return clone
}

module.exports = sortObject

