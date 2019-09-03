/**
 * 深拷贝
 */
const deepCopy = (obj) => {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  let newObj = new obj.constructor()
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}
/**
 * 格式时间展示
 * */
const timeFormat = (date, type = 'YYYYMMDD') => {
  let d
  if (!date) {
    return ''
  } else {
    d = new Date(date)
  }

  let year = d.getFullYear()
  let month = (d.getMonth() + 1) > 9 ? '' + (d.getMonth() + 1) : '0' + (d.getMonth() + 1)
  let day = d.getDate() > 9 ? '' + d.getDate() : '0' + d.getDate()
  let h = d.getHours() > 9 ? '' + d.getHours() : '0' + d.getHours()
  let m = d.getMinutes() > 9 ? '' + d.getMinutes() : '0' + d.getMinutes()
  let s = d.getSeconds() > 9 ? '' + d.getSeconds() : '0' + d.getSeconds()
  let ret
  if (type === 'YYYYMMDD') {
    ret = `${year}-${month}-${day}`
  } else if (type === 'YYYYMMDDHHmmSS') {
    ret = `${year}-${month}-${day} ${h}:${m}:${s}`
  } else if (type === 'YYYYMM') {
    ret = `${year}-${month}`
  } else if (type === 'yyyymm') {
    ret = `${year}${month}`
  }
  return ret
}
export { deepCopy, timeFormat }
