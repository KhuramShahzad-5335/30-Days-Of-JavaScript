/**
In the following shopping cart add, remove, edit items:
*add 'Meat' in the beginning of your shopping cart if it has not been already added
*add Sugar at the end of you shopping cart if it has not been already added
*remove 'Honey' if you are allergic to honey
*modify Tea to 'Green Tea'
 */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart1 = shoppingCart.unshift('Meat');
console.log(shoppingCart)


//add Sugar at the end of you shopping cart if it has not been already added

console.log(shoppingCart.push('Sugar'),shoppingCart)




//remove 'Honey' if you are allergic to honey

indexOfHoney = shoppingCart.indexOf('Honey');
remHoney = shoppingCart.splice(indexOfHoney,1)
console.log(shoppingCart)

//modify Tea to 'Green Tea'

indexOfTea = shoppingCart.indexOf('Tea');
replaceEl = shoppingCart.splice(indexOfTea,1,'Green Tea');
console.log(replaceEl)
console.log(shoppingCart)