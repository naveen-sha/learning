// chapter 4 arrays and array methods .
/* in javascript array is a collection of items 
it is linear way to store value */ 
// let marks=[2,4,5,3,2,6,7,];
// console.log(marks);
// console.log(marks.length);
// let heroes =["tony stark","tom cruse","tom hollend","thomas shelby"];
// console.log(heroes);
// array indices..............
// let marks=[2,35,4,6,4,32,65,43,]
// console.log(marks)
// we can change and update in number but not in strings.......beacuse strings are immutable in javascript and arry are mutable ..
// looping over an array......
// loop--> iterable (strings,object,arry)we can apply loop in .
// for loop...
// let marks=["tony stark","tom cruse","tom hollend","thomas shelby"];
// for(let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }
// for-of-loop.........
// let heroes =["tony stark","tom cruse","tom hollend","thomas shelby"];
// for(let hero of heroes){
//     console.log(hero);
// } we will also do this with cities and all kind of things
//  practice question...
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum+=val;
// }
// let avg=sum/marks.length;
// console.log(avg)t
// practice question....
// let items=[250,645,300,900,50];
// let idx=0;
// for(let val of items){
//      let offer =val/10;
//      items[idx]=items[idx]-offer
//      console.log(`value after offer=${items[idx]}`)
//      idx++

// }
// for(let i=0;i<items.length;i++){
//     let offer =items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);
// methods of array in javascript.....
// let heroes=["tonystark","ironman"];
// heroes.push("antman","natasha");
// let deleteditem=heroes.pop();
// console.log("heroes :",deleteditem);
// console.log(heroes.toString());
// console.log(heroes);
// concat method in array....................
/*let marvelheroes=["thor","spiderman","ironamn"];
let dcuniverse=["superman","wonderwomen","flash"];
let bharatheroes=["saktiman","krish","murly"];
 let heroes=marvelheroes.concat(dcuniverse,bharatheroes);
console.log(heroes);*/
// unshift method..................its simillier to push method..
// let marvelheroes=["thor","spiderman","ironamn","antman","hulk"];
/* marvelheroes.unshift("antman");
 console.log(marvelheroes)*/
// unshift methods ........its like pop method..
/*let val =marvelheroes.shift("thor");
console.log("Delete :",val);*/
// slice methods ....in array..
/*console.log(marvelheroes);
console.log(marvelheroes.slice(2,5));*/
//  splice method in array .................change original array (add,remove.replace)
// let arr =[1,2,3,4,5,6,7,8,9,];
// // let num=arr.splice(2,4,6,7,6,5)
// let num=arr.splice(2,0,67);
// console.log(num);
// practice question .............
// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// // let com=companies.slice(0,1);
// // let com=companies.splice(2,1,"ola");
// // let com=companies.push("amazon");
// console.log(com);









