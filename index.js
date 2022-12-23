 /*  const arr = ['milk', 'egg', 'apple', 'oil', 'potato', 'banana', 'watermelon']; */ 
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

/* const foundProduct = arr.find((product) =>{
    return product === 'oil'
})

console.log('foundProduct', foundProduct); */

/* const animals = ['dog', 'mouse', 'cat', 'monkey']; */

/* function findCat(){
    for (let index = 0; index < animals.length; index++) {
       
        console.log('==> animals[index]', animals[index]);

        if (animals[index] === 'cat') {
            console.log('cat is found');
            break;
        } else {
            console.log('cat is not found');
        }
        
    }
}

findCat(); */

/* const food = ['pizza', 'burger', 'KFC', 'apple'];

function findKFC() {
    const foundFood = food.find((food) => food === 'KFC');

    if (foundFood) {
        console.log('found food is', foundFood);
    } else {
        console.error('not found');
    }
}

findKFC(); */

/* const arr = [
    {
        name: 'Elman',
        age: 18
    },
    {
        name: 'Denis',
        age: 23
    },
    {
        name: 'Max',
        age: 2
    }
]

const filteredArray = arr.filter((element) => element.age < 23);
console.log('filteredArray', filteredArray); */

/* const arr = [
    {
        name: 'Messi',
        hobbie: 'football',
    },
    {
        name: 'Rodrygo',
        hobbie: 'swimming'
    },
    {
        name: 'Rodry',
        hobbie: 'drawing'
    },
    {
        name: 'Ramos',
        hobbie: 'ddddre'
    },
    {
        name: 'Ronaldo',
        hobbie: 'football'
    }
]

const filteredArray = arr.filter((element) => element.hobbie === 'football');
console.log('filteredArray', filteredArray); */


/* const str = 'hello';

console.log(str[0]);

for(let index = 0; index < str.length; index++) {
    console.log(str[index]);
} */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const spliced = arr.splice(0, 5);

console.log(spliced); */

const box = document.getElementById('box');
const btn = document.getElementById('btn');

function rotate() {
   box.innerHTML = 'hello world'
    box.style.marginLeft = '500px';
    box.style.backgroundColor = 'yellow';
}

btn.addEventListener('click', function () {
    rotate();
})

console.log('btn', btn);