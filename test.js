/*let date = new Date()
let gg = date.getDay()
console.log(gg)
let utc = 'Thu, 29 Nov 00:00:00 UTC'*/

var date = new Date()
date.setTime(date.getTime()+(720*60*60*10000))
var expires = date.toUTCString()
console.log(expires)