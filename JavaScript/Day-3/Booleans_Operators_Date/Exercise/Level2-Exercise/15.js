const DATE_TIME = new Date();

let yyyy = DATE_TIME.getFullYear()
let mm = DATE_TIME.getMonth() + 1   // months start form 0......
let dd = DATE_TIME.getDate()

let hh = DATE_TIME.getHours()
let min = DATE_TIME.getMinutes()

//YYYY-MM-DD HH:mm
console.log(`${yyyy}-${mm}-${dd}  ${hh}:${min}`)

//DD-MM-YYYY HH:mm
console.log(`${dd}-${mm}-${yyyy}  ${hh}:${min}`)

//DD/MM/YYYY HH:mm
console.log(`${dd}/${mm}/${yyyy}  ${hh}:${min}`)

test = DATE_TIME.getUTCDay()