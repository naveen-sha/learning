/*console.log("naveen");
// do while loop..
let i=1;
do{
    console.log("naveen");
    i++;

}while(i<10);
// do while loop is atleast one time is execute no matter the condition is true or or false..
// its does't check the condition on ist time run.
let name=`naveen sharma`;
console.log(name);
// we easily add space using bactics(``)..
let firstname=new String("naveen sharma");
console.log(firstname);
/*
operation{
1:concatenation
2:substring
3:length
4:upppercase
5:lowercase
6:charAT
7:indexof
}*/
// bactics (template literals);.............
/* let opt1='naveen ';
let opt2='sharma ';
let ans = opt1  +  opt2;
console.log(ans);
let finalans=`${opt1}${opt2}`;
console.log(finalans.length);
let hlo="ke\\ haal\\ chal\\ chore";
let word=hlo.split('\\');
console.log(word);*/
/* function getmyname(firstname,lastname){
let fullname=firstname+" "+lastname;
return fullname;

}
let fullname=getmyname("nikku","sharma");
console.log("fullname:",fullname);
*/
/* arrays in js
refrence type
two type of memory stack or heap in stack we store primitive and in heap we store non-promitive dt like in heap we store objects,function,arrays and in this take refrence from variable .
object --> collection of key value pairs.
shallow copies..
deep copies.
objects...
let obj={
    name:"naveen",
    age:17,
    height:5.9,
    weight:66,
    greet : function(){
        console.log("or bhai sunade");
    }

    
};
console.log(obj);
obj.greet();
*/
/* // arrays....
// creation of array.
let arr =[1,1,21,2,3,4,455,];
// array constructor ..
let brr =new Array('nikku',786,false);
console.log(arr);
console.log(brr);
console.log(typeof(arr));
console.log(arr[0]);
// to access element in array we use index.
*/
// built-in methods in arrays...
/* push--insert at end 
pop--remove at end
shift--remove first left element 
unshift--add first left element 
slice--remove the part form arry and give last element of remove (1,8)strt idx and end idx.
splice--change content like insert ,replace,remove in array..
map--square of all element /change in element .
filter--choose element .
reduce--add all elements.
sort--give asscending/desscending order in array .
indexof--it gives index of element .
find--it find the single element .
*/
/* let arr=new Array(1,23,4,5,"naveen",true);
arr.push("sharma");
arr.pop();
arr.shift();
arr.unshift("nikku");
console.log(arr.slice(3,4));
console.log(arr.splice(1,2,'nishu'));
*/
// map method..
/*vlet arr =[10,30,89,56];
let ansarrray=arr.map((num)=>{
    return num*num;
})
console.log(ansarrray);
// its always need a function to define it..
arr.map((num,index)=>{
   console.log(num+1);
   console.log(index);
})

*/
// filter method.
/*let arr=[1,2,3,4,5,3,4,33,56,4,32,75,];
let evenarray=arr.filter((number)=>{
    return number%2===0;
    // if(number%2===0){
    //     return true;
    // }else{
    //     return false;
    // }
});
console.log(evenarray);
// it filter the array like give even or odd numbers.

let arr=[1,2,3,'hi','nikku',true,null];
let ans=arr.filter((value)=>{
    if(typeof(value)=='string'){
        return true;
    }else{
        return false;
    }
})
console.log(ans);

*/
// reduce method ..
/* let arr=[10,20,30,40,50];
let ans=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ans);
// it combine everything in one value;*/
/* let arr1=[1,2,4,6,4,2,41,64,5,8];
arr1.sort();
console.log(arr1);

let arr = [1, 2, 4, 6, 4, 2, 41, 64, 5, 8];

arr.sort((a, b) => a- b);

console.log(arr);
*/
// index of method..

/* let arr=[1,2,3,4,5,6,7];
console.log(arr.indexOf(4));
// find method.*/
/* let arr=[1,2,3,4,5,6,7];
let ans=arr.find((num)=>{
    return num>=5;
})
console.log(ans);
// its give me first find value..*/
// foreach loop..
/* let arr=[1,2,3,4,5];
// traditional loop
let length=arr.length
for(let index=0;index<=length-1;index++){
    console.log(arr[index])
    // arr.forEach((value,index)=>{
        //     console.log("number:",value,"index:",index);
        // });
       /* let numbers = [5, 12, 8, 20, 7, 15];
       
       // FILTER → function tells which numbers to keep
       let filtered = numbers.filter((num) =>{
         return num >15;
       });
       
       // MAP → function tells how to change each number
       let squared = filtered.map((num)=> {
         return num * num;
       });
       
       // REDUCE → function tells how to combine values
       let sum = squared.reduce((acc, curr) =>{
         return acc + curr;
       }, 0);
       
       console.log(sum);
   }*/
//   thats how reduce method works.
/*let arr=[1,2,3,4,5,7,90,4];
let sum=arr.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum);
*/
 /* let arr1=[1,2,4,6,4,2,41,64,5,8];
arr1.sort();
console.log(arr1);

let arr = [1, 2, 4, 6, 4, 2, 41, 64, 5, 8];

arr.sort((a, b) => a- b);

console.log(arr);
*/
/* let arr=[1,2,3,4,5,6,7];
console.log(arr.indexOf(4));*/

/* let arr=[1,2,3,4,5,6,7];
let ans=arr.find((num)=>{
    return num>=5;
})
console.log(ans);*/
/* let arr=[10,20,30,40];
arr.forEach((value,index)=>{
    console.log("number:",value,"index",index);
});
*/
// for in loop......................

/* let obj={
    name:"naveen",
    age:17,
    height:5.9,
    weight:66,
    greet : function(){
        console.log("or bhai sunade");
    }

    
};
for(let key in obj){
    console.log(key," ",obj[key]);
}
      */
// for of loop.............
/* let arr=[10,20,30,40,50];
for(let keys of arr){
    console.log(keys);
}
let char="naveensharma ";
for(let name of char){
    console.log(name);
}
    */
//  arrays with functions..
/* let arr=[10,20,30,40,50];
function getsum(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum;
}
let totsum=getsum(arr);
console.log(totsum);
*/

/*let data=[
     {name: "John", score: 85},
  {name: "Jane", score: 92},
  {name: "Bob", score: 75}
];

data.forEach(element => {
    console.log(data);
});
/*console.log(data);
let array=["apple","banana","chiku"];
array.forEach(element => {
    console.log(element.toUpperCase());
});
let sum=[10,20,30,40];
sum.forEach(element => {
    sum=element+sum;
    console.log(element);
});*/
/* let arr=[1,2,3,4,56];
let square=[];
arr.forEach(element => {
   square.push(element*element);
});
console.log(square)
*/
/* let array=[1,3,6,8,10];
array.forEach(element => {
    console.log(array.length);
});
*/
/* let n = 5; // height of the pyramid

for (let i = 0; i < n; i++) {
  let row = "";

  // Print leading spaces
  for (let j = 0; j < i; j++) {
    row += " ";
  }

  // Print stars
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    row += "*";
  }

  console.log(row);
}
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
  */
/* function printnumber(num){
    console.log("print the number:",num);

}
printnumber(999);
*/
/* function getsum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let ans=getsum(1,4,7);
console.log(ans);*/
/* function getmultiplication(a,b){
    return a*b;

}
console.log(getmultiplication(67,4));
*/
/* let getmultiplication=function(a,b){
    return a*b;
}
let ans = getmultiplication(3,5);
console.log(ans);
*/
// arrow function;
/* let getexp=(x,y)=>{
    let ans=x**y
    return ans;
};
console.log(getexp(6,3));
*/
// function call stack & hoisting.........
// console.log(age);
//  var age=17; give undefined 
// console.log(age); give me error.
// let age=17
// variable hoisting .. only in  var 
// function hoisting.. only in simpel function..
/* console.log(hoisting(5,6));

function hoisting(c,d){
    return c*d;
};*/
// class hoisting ..
// class --> its like a blueprint.. and its like house blue print and after finish the house it is called object.
/* class insan{
    
}
const object1=new insan();
// function call stack..
// stack--> data structure --> (container)-->lifo(last in first out);



// why function known as first class citizens because in javascript it play most of the valueable role..

/* function greetme(greet,fulname){
    console.log('hello ke hal chal',fulname);
    greet();
}
function greet(){
    console.log("naveen");
}
greetme(greet,"naveen sharma");
*/
// nested function..
/* function solve(number){
    return function (number){
        return number*number;
    }
}
let ans=solve(7);
let finalans=ans(10);
console.log(finalans);
*/
// data structure in function.
/* const arr=[
    function(a,b){
        return a+b;

    },
    function(a,b){
        return a-b;

    },
    function(a,b){
        return a*b;

    }
];
let first=arr[1];
let ans=first(9,9);
console.log(ans)
*/
// in obejct..
/* let obejct={
    agr:24,
    wt:66,
    ht:56,
    greet:()=>{
        console.log("hello duniya");
    }
}
console.log(obejct.agr);
obejct.greet();
*/
// temporal deadzone ,variable scoping...
// variable scoping..
// global scoping..
/* var age =27;
console.log(age);
{
    console.log(age);

}

if(true){
    console.log(age);

}

for(let i=0;i<2;i++){
    console.log(age);
}
function seynamaste(){
    console.log("hi",age);
}
seynamaste();
*/
// function scoping...
/* function seynamaste(){
    const name="nishu";
    console.log("namaste",name);
}
seynamaste();
*/
// access only in function..
// block scoping..
/* {
    var heap=33;

}
console.log(heap);*/
// give me error in use of let,const
// temporal deadzone...
/* console.log(marks);
console.log("babber");
console.log("love");
const marks =100;
console.log(marks);
// this is deadzone..*/
// doing some fun with making logic....
/* let nishu ={
    sirname:"sharma",
    class:"11th",
    section:"A",
    age:16,
    height:"5ft and 9 inches",
    weight:"66kg",
    skill:"quick angry"


};
if(nishu.section=="A"){

    for(let i=nishu.weight;i==nishu.weight;i++){
       for(let x=nishu.skill;x==nishu.skill;x++){
        if(nishu.height=="5ft and 9 inches"&nishu.age==15){
            console.log("nothing to say that");
        }else{
            console.log("nikku is the knight king");
        }

       }
    }

};
*/


