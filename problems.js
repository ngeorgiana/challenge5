
/** Array Functions **/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru si returneaza un array de numere unde toate numerele au fost adunate cu 2
*/

var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function typeCastAndAdd (strArr) {
  return strArr.map((x) => Number(x, 10) + 2);
}

// Alternativ, parseFloat() 

console.log('Typecast: ', typeCastAndAdd(strArr));

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/

const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

// function pluck(arr){
//   return arr.map((obj) => obj.color);
// }

function pluck(arr){
  return arr.map(({color}) => color);
}
console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din array-ul de mai sus, aria e inaltime * latime.
*/

function calculateArea(arr){
  return arr.map(({ height, width }) => height * width);       
}
console.log(calculateArea(demoArr));

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai mica sau egala cu 100
*/

function filterArr(arr) {
  return calculateArea(arr).filter(sbs => sbs <= 100);
}

console.log(filterArr(demoArr));


/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator. Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false. Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. Daca returneaza false va fi inclus.
*/

function iterator(obj) {
  if (obj.height < 10) {
    return false;
  }
  return true;
}

function reject(arr, iterator) {
   return arr.filter (obj => !iterator(obj))
 }

console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/

function findColor(arr, str){
  return arr.reduce ((res, obj) => obj.color === str ? obj: res);
}

console.log(findColor(demoArr, 'crimson'));

/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/

function areasAreBigger(arr, num){
  return arr.map(({ height, width}) => height * width >= 10 ? true : false); 
}

console.log(areasAreBigger(demoArr, 10))

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/

function atLeastOneIsOfColor(arr, str) {
  return arr.some(({color}) => color === 'green');
}

console.log(atLeastOneIsOfColor(demoArr, 'balarie'));

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/

function sumOfDistances(arr) {
  return arr.reduce((accumulator, obj) => accumulator + obj.distance, 0);
}

console.log('Sum of distances: ', sumOfDistances(demoArr));

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/

function noColors(arr) {
  return (arr.map((obj) => obj.color)).reduce(function(prev, current) {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {});
}

console.log('Number of colors: ', noColors(demoArr));

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/

function uniqueColors(arr) {
  return [...new Set(arr.map(({color}) => color))]
}

console.log('Unique Colors: ', uniqueColors(demoArr));

/*
11. Sa se scrie o functie care inverseaza doua numere.
*/

let a = 5, b = 8;

[a, b] = [b, a];

console.log('A:', a, 'B:', b);

// function swapNum(x, y) {
//   return [x, y] = [y, x];
// }

// console.log(swapNum("A: " + a, "B: " +  b));

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = [] = classes.map(([subject, time, teacher]) => ({subject, time, teacher}));

console.log(objClasses);