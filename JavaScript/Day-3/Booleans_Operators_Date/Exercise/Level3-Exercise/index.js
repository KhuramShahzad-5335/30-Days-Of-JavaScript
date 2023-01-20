//creating object

let now = new Date();

//getting dates and times store in variable

let yyyy = now.getFullYear();
let mm = now.getMonth();
let dd = now.getDate();

let hh = now.getHours();
let min = now.getMinutes();
let ss = now.getSeconds();

// months start from zero so fix that issue

mm = mm + 1; 


//add zero before months

mm < 10
    ?   '0' + mm
    :   mm

    console.log(mm)

// add zero before hours

hh < 10
    ?   '0' + hh
    :   hh

// add zero before minutes 

min = min < 10
    ?   '0' + min 
    :   min

// add zero before seconds

ss = ss < 10
    ?   '0' + ss
    :   ss

//add am, pm logic

ampm = hh > hh
    ?   'AM'
    :   'PM'

hh = hh % 12;           //hh = 11
hh = hh 
    ?   hh 
    :   12;      //hh = 11 then 11, else 12

// the output in correct format

console.log(`${dd}/${mm}/${yyyy}  ${hh}:${min}:${ss}  ${ampm}`)

