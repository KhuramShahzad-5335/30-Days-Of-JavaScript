//===============               1               ================
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const products1 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  // so we will chain three methods,
  // map to get new array of price, filter to filter only numtype price and then reduce for sum

  
   const sum1 =  products1.map((obj) => obj.price)
                         .filter((obj) => typeof obj == 'number')
                         .reduce((a,b) => a + b ,0);

console.log(sum1);







//================              2              ====================
//Find the sum of price of products using only reduce reduce(callback))

// we have to find sum of the price of the products by only using reduce method.

const products2 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

// as reduce only returns single value so
const sum2 = products2.reduce((sum, current, index) =>{
    //lets check if the type of price is num and then additional things
    if(typeof current.price == 'number'){
        // as current.price was object type, so converted that to the int and you can see we have rocked it.
        sum += parseInt(current.price);
    }
    return sum;
},0);

console.log(sum2);





