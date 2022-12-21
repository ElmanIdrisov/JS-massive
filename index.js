  const arr = ['milk', 'egg', 'apple', 'oil', 'potato', 'banana', 'watermelon']; 
/* const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8];  */
/* let x = 1;
const y = ++x; */ 

/* let selectedProduct = null;  
let foundProduct = 'oil' */

/* for (let index = 0; index < arr.length; index++) {
    const product = arr[index];

    

   if (product === foundProduct) {
    selectedProduct = product;
    break;
   }
   console.log(product);
} 

console.log('selectedProduct :', selectedProduct); */


/* arr.forEach(function(product) {
    if(product === foundProduct ) {
        selectedProduct = product;
    }
}); */

/* /* const changedArr = arrOfNum.map((number) =>{
    return number * 2
})

console.log('arr', arr);
console.log('changedArr ', changedArr); */


/* const arr = ['']; */

/* arr.push('product')

console.log('arr', arr); */

const foundProduct = arr.find((product) =>{
    return product === 'oil'
})

console.log('foundProduct', foundProduct);