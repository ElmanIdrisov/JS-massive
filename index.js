 /* const arr = ['milk', 'egg', 'apple', 'oil','potato','banana','watermelon']; */
/*  const arrOfNum = [10, 20, 30, 40, 50, 60, 70, 80]; */

/* let selectedProduct = null;
const searchProduct = 'banana'




for (let index = 0; index < arr.length; index++) {
    
    const product = arr[index];
    if(product === searchProduct){
        selectedProduct = product;
    }
}


console.log('selectedProduct:', selectedProduct); */ 

/* const changedArr = arrOfNum.map((number) => {
    return number * 2;
})

console.log('arr', arr);
console.log('changedArr', changedArr); */

/* const foundProduct = arr.find((product) => {
    console.log('product: ', product);
    return product ===  'oil'
})

console.log('foundProduct: ', foundProduct);

 */

/* const arr = ['dog', 'cat', 'mouse', 'lion', 'tiger'];

let findAnimal  

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === 'cat') {
        findAnimal = element;
    }
}

console.log('findAnimal: ', findAnimal); */
 
const arr = [
    {
        name: 'Denis',
        hobbie: 'swimming'
    },
    {
        name: 'Elman',
        hobbie: 'drawing'
    },
    {
        name: 'Ahmed',
        hobbie: 'singing'
    },
    {
        name: 'Adil',
        hobbie: 'collecting'
    },
    {
        name: 'Isa',
        hobbie: 'swimming'
    }

]

const filteredArray = arr.filter((element) => element.hobbie === 'swimming');
console.log('filteredArray: ', filteredArray);