//=================         1.
// Check the speed difference among the following loops: while, for, for of, forEach


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.group('Loop Info')

// While.
console.time('While Loop.')

let i = 0;
while(i < countries.length){
    console.log(countries[i]);
    i++
}

console.timeEnd('While Loop.')


// regular for loop.
console.time('Regular For Loop.')

for(let i = 0; i < countries.length; i ++ ){
    console.log(countries[i]);
}

console.timeEnd('Regular For Loop.')


// For of loop
console.time('For-of Loop.')

for (const [counrty, city] of countries) {
    console.log([counrty, city])
}

console.timeEnd('For-of Loop.')



// for each loop
console.time('Foreach Loop.')
countries.forEach(([counrty,city]) => {
    console.table([counrty, city]);
});
console.timeEnd('Foreach Loop.')

console.groupEnd('Loop Info')
