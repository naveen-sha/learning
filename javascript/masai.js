//  while loop in continue .......
 /* let i=0;
while(i<=5){
    i++;
    if(i==3){
        
        console.log("skipped");
        continue;
        
    }
    console.log("naveen",i);
}
//  for loop .......
for(let i=1;i<=10;i++){
    console.log("naveen");
}
for(let i=1;i<=10;i++){
    if(i==5){
        
        console.log("skipped");
        continue;
    }
    console.log(i);

}
var pocket=""
for(let i=1;i<=10;i++){
    pocket=pocket+i+" ";
    console.log(pocket);
    
}
// reverse loop ..
let pocket=""
for(let i=5;i>=1;i--){
    pocket=pocket+i;

}
console.log(pocket);

// print the factorial of num;
let num=8;
let factorial=1;
for(let i=num;i>=1;i--){
    factorial=factorial*i;

}
console.log(factorial);

// find the average of even number between 1 and 50;
let start =1;
let end =50;
let sum =0;
let count=0;
for(let i=start;i<=end;i++){
    if(i%2==0){
        sum=sum+i;
        count++;
    }
}
console.log("the averageis;",sum/count);

//  break and continue in for loop...
//  break..
for(let i=1;i<=80;i++){
    if(i==11){

        
        break;
    }
    console.log(i,"is got 20% discount");
}

// continue...
for(let i=1;i<=80;i++){
    if(i==11){
        continue;
    }
    console.log(i,"is got 20% discount");
}

// Nested loop...
// rahul want to eat 10 gol gappas ;
for(let member=1;member<=4;member++){


   for (let golgappas =1;golgappas<=10;golgappas++){
    console.log(member,"member is eating",golgappas,"gol gappas");
   }
}

// print 1-5 10 times..
 let num1=1
let num2=54
for(let print=num1;print<=num2;print++){
    for(let no=1;no<=100;no++){
        console.log("the no. is:",no);
    }
}

 var seeds=1
var farm=5
for (let farm=seeds;farm<=10;farm++){
    for( let son=1;son<=10;son++){
        console.log("you work is done sir,give","farm",farm,"seed no",son);

    }
}

 let seeds=1
let farm=5

for (let farm=seeds;farm<=5;farm++){
    let pocket=""
    
    for( let son=1;son<=10;son++){
       pocket=pocket+"*";

    }
    console.log(pocket);

}
    

//  printing star patren 5 times..
 for(let i=1;i<=5;i++){
  for (let farm=5;farm>=1;farm--){
    let pocket="";
    
    for( let seed=1;seed<=farm;seed++){
       pocket=pocket+"*";
  
    }
    console.log(pocket);

}
}

 for(let i=1;i<=5;i++){
  for (let x=5;x>=1;x--){
    let pocket="";
    
    for( let y=1;y<=x;y++){
       pocket=pocket+y;

    }
    console.log(pocket);
}
}

//  little bit tricky.
 for(let i =1;i<=5;i++){
let pocket1=""
let pocket2=""
for(let a=1;a<=i;a++){
    pocket1=pocket1+a+" ";
}
console.log(pocket1);
for( let b=1;b<=i;b++){
    pocket2=pocket2+"*"+" "
}
console.log(pocket2);
}

// break and continue............
for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a>i){
            break;
        }
        console.log("i=",i,"&","a=",a);
    }
}

 for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a==i){
            break;
        }
        console.log("i=",i,"&","a=",a);
    }
}
for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a==i){
            continue;
        }
        console.log("i=",i,"&","a=",a);
    }
}
    
//    nested while loops..

 let a=1
while(a<=5){
    let i=1;
while(i<=5){
    console.log(a,"  & ",i);
    i++
}
a++ 
} 
// chatgpt nested loop question.....................

// ques 1....
 for(let i=1;i<=5;i++){
    let ans="";
    for(let a=1;a<=5;a++){
        ans =ans+"   "+"*";

    }
    console.log(ans);
} 
// ques 2.......
     for(let i=1;i<=4;i++){
    let str="";
    for(let a=1;a<=i;a++){
        str=str+"*";
    }
    console.log(str);
}
    // ques 3.........
 for(let i=1;i<=4;i++){
    let no="";
    for(let a=1;a<=i;a++){
        no=no+a;
    }
    console.log(no)
}
// ques 4
for(let i=1;i<=10;i++){
    
    for(let a=1;a<=10;a++){
        product=i*a;

    }
    console.log(product);
}
//  ques 5
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}
//  ques 6 ..
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}

// reverse piramid of stars..
let n = 5; // height of the pyramid

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
*/
// today  i learn about array......
//  array are data structure used to store any kind of data..

/* let friends =["nikku","nishu","prateek","hacker"];
console.log(friends  [3] );
*/

/* let friends =["nikku","nishu","prateek","hacker"];
console.log(friends  [3] );
for (idx=0;idx<=4;idx++){
    console.log(friends[idx])
}
    */
/* let num =["nikku","nishu","prateek","hacker","suiii","broooo"];
for(let i =0;i<=num.length-1;i++){
    console.log(num[i])
}
*/
// push & pop in array..

 /* let friends =["nikku","nishu","prateek","hacker"];
 friends.push("nikhil");
console.log(friends);
*/
// activity
/* let arr =[];
 arr.push(1);
 arr.push(2);
 arr.push(3);
 arr.push(16,84,3);
 let start_index=0;
 let end_index=arr.length-1;
 for(let idx=start_index;idx<=end_index;idx++){
    console.log(arr[idx]); 
 }
*/
// reverse maner; 
/* let arr =[];
 arr.push(1);
 arr.push(2);
 arr.push(3);
 arr.push(16,84,3);
 let start_index=0;
 let end_index=arr.length-1;
 for(let idx=end_index;idx<=start_index;idx--){
    console.log(arr[idx]); 
 }
*/
// pop ..............
/* let arr =[];
 arr.push(1);
 arr.push(2);
 arr.push(3);
 arr.push(16,84,3);
 arr.pop();
 arr.pop();
console.log(arr);
*/
/* let numbers =[1,2,3,4,5,6,88];
for (let i=1;i<=3;i++){
    numbers.pop();

}
console.log(numbers);
*/
// how to update the element 
/* let numbers =[1,2,3,4,5,6,88];
numbers[4]=9;
console.log(numbers);
numbers[3]=0;
console.log(numbers);*/
// break and continue in arrays....
/* let movies=["bahubali","kgf","ironmain","endgame","infinity war"];
for(let i=0;i<=movies.length-1;i++){
    if(i==3){
        continue;
    }
    console.log(movies[i]);
}
    */
   /* let movies=["bahubali","kgf","ironmain","endgame","infinity war"];
for(let i=0;i<=movies.length-1;i++){
    if(i==3){
        break;
    }
    console.log(movies[i]);
}
*/
//  print last three movies .
/* let movies=["bahubali","kgf","ironmain","endgame","infinity war"]; 
 
for (let i=movies.length-3;i<=movies.length-1;i++){
    console.log(movies[i]);
}
*/
//  you have an array with even length,print the second half of the array.
/* let arr =[1,2,3,4,5,6,88,];
let start=arr.length/2;
if(arr.length%2!=0){
    start=(arr.length+1)/2;
}
let end=arr.length-1;
for (let i=start;i<=end;i++){
    console.log(arr[i]);
}
*/
// add all the elements ...
/* let  arr =[1,2,3,4,5,6,7];
let summ=0;
for (let i=0;i<=arr.length-1;i++){
    summ=summ+arr[i];
}
 console.log(summ); */
// calculate maximum  value in the array ;
/*
let arr=[1,2,4,5,7,9,83];
let copy=arr[0];
for (let i=0;i<=arr.length-1;i++){
    if(arr[i]>copy){
        copy=arr[i];
    }
}
console.log(copy);
*/
 /* let arr=[1,-2,4,5,7,-9,-83];
// let copy=arr[0]; small vale - infinity.
for (let i=0;i<=arr.length-1;i++){
    if(arr[i]>copy){
        copy=arr[i];
    }
}
console.log(copy);
 */
// sum of all elements ..
 /* let elements =[2,4,6,8,6,4];
let sum=0;
for(let i=0;i<=elements.length-1;i++){
   hack =sum+=elements[i];
    
}
console.log(hack);
*/
//  strings ...................
// strings are similer to the arrays..
// real life example of strings 
/* let pass="nikki sharma";
if(pass.length<7){
    console.log("bhai/bahen isa pass le jiske idx ki lambai 7 t jyada ho");

}else{
    console.log("ho gya bhai/bahen sign up");

}
    */
//  find the first non repeating number ..
/* let text="aabbccddffsggeddxx";
let result=null;
for (let i=0;i<text.length;i++){
    let sentence=text[i];
    if(text.indexOf(sentence)===text.lastIndexOf(sentence)){
        result=sentence;
        break;
    }
}
console.log("the result is:",result);
*/
 /* let game ="spider man";
for(let i=0;i<game.length;i++){
    console.log(game[i]);
}
    */
//    arrays and strings are same.. in many ways
// this is the difference between arrays and strings.
/* 
* in array we can do push and pop..and update any value by helping of index..
* in stings no push no pop no update the value.
*/
/* let string ='hero hira lal';
let jhola="";
for(let i=0;i<=string.length-2;i++){
    if(i==4){
        continue;

    }
    jhola+=string[i];
    
}
console.log(jhola);
*/
//  reverse the string.
/* let string ='hero hira lal';
let jhola="";
for(let i=string.length-1;i>=0;i--){
    if(i==4){
        continue;

    }
    jhola+=string[i];
    
}
console.log(jhola);
*/
/* let stri="jimmy parker";
let arr =[];
for(let i=0;i<=stri.length-1;i++){
    arr.push(stri[i]);
}
arr[5]="*";
console.log(arr);
*/
// to convert _to @ ..in naveen _sharma.
/* let string="naveen_sharma";
let jhola="";
for (let i=0;i<string.length;i++){
    if(i==6){
        jhola=jhola+"@";

    }else{
        jhola=jhola+string[i];
    }
}
console.log(jhola);
*/
// to check the first chacter of each element are same..
/* let naam=["nikku","arjun","aditya","nishu","tane","alex"];

let count =0;
for(let i=0;i<naam.length;i++){
    let ns=naam[i];
    if(ns[0]=="a"){
        count++;

    }

}
console.log(count)
*/
// to check each and every character of strings
/* let naam=["nikku","arjun","aditya","nishu","tane","alex"];
let count=0;
for(let i=0;i<naam.length;i++){
   let strings=naam[i];
    for(let j=0;j<strings.length;j++){
        if(strings[j]=="a"||strings[j]=="n"){
            count++;
            break;
        }
    }
}
console.log(count);
*/
// .......................................................function.............................................
// this is hard coded code..
/* function nishu_function9(){
    let name ="nishu";
    for(let i=0;i<name.length;i++){
        console.log(name[i])
    }
}
let n=0;
while(n<10){
         console.log( nishu_function9());
    if(n==4){
    console.log("suiiiiiiiii");
    break;
    }
    n++;
}
    */
// this is generic function code..
/* function nishu(a,b){
    console.log(a*b);
}
nishu(8467,4758)
*/
// return statement .......
 /* function nikku(a,b){
    return a/b;
}
let nishu=nikku(75,57);
console.log(nishu);
*/
// suiiiiiiiiiiiiiiiiii
/* function nishu(a,b){
    return a-b;
}

function nishant(n){
    return n/3;
}
function nikku(ns){
    console.log(ns*6);
}
let step1=nishu(56,48);
let step2=nishant(step1);
nikku(step2);
*/
/* function nikku(a,b){
    return a*b;
}
 function nikhil(n){
    return n/9;
 }
 function naveen(s){
    console.log(s-7);
 }
let step=nikku(7,9);
let step2=nikhil(step);
naveen(step2);
*/
// function ke block ke ander vala element local hota hai or bhar vala globle..
/* function check(){
    let num=409;
    if(num%5==0){
        console.log("this is even");
    } else{
        console.log("this is odd");
    }
}
check();
*/
// some problems solving practice ...
/* for(let i=0;i<=50;i++){
    if(i%3==0){
        continue;
    }
    console.log("i : ",i);

}
    */
//  now i learn inbuilt function ..
//  inbuilt function is that like (.length or .push )its perform specific task ..
/* function check(num){
    
    if(num%2==0){
        console.log("this is even:true");
        
    }else{
        console.log("this is not :false");
    }

}
check(num=4);
*/
// using the even/odd function calculate the sum of even numbers in the array.
/* function check(num){
    
    if(num%2==0){
       return true;
        
    }else{
        return false;
    }

}

let arr=[1,2,3,4,5,6,7,8,9,2,4];
let box=0;
for(let i=0;i<arr.length-1;i++){
    if(check(arr[i])==true){
        box=box+arr[i];
    }
}
console.log(box);
let box2=0;
for(let i=0;i<arr.length-1;i++){
    if(check(arr[i])!==true){
        box2=box2+arr[i];
    }
}
console.log(box2);
*/
// write a function to reverse the string..
/* function reverse_name(str){
let thaili=""
for(let i=str.length-1;i>=0;i--){
    thaili=thaili+str[i];

}
return thaili;
};
console.log(reverse_name("nikku"));
// for palindrom names...
function reverse_name(str){
let thaili=""
for(let i=str.length-1;i>=0;i--){
    thaili=thaili+str[i];

}
return thaili;
};
console.log(reverse_name("racecar"));
*/
function reverse_name(str){
let thaili=""
for(let i=str.length-1;i>=0;i--){
    thaili=thaili+str[i];

}
return thaili;
}
let namee="nikku";
let rev_str=reverse_name(namee)
function check_palindrom(a,b){
if(a==b){
    console.log("this is a palindrom");
}else{
    console.log("this is not a palindrom");
}
}
check_palindrom(namee,rev_str);
// this will work  for only stings.
// write the function to multiply elements of two arrays and store the product in a new array
function multiply(a,b){
    
let product=[];
for(let i=0;i<arr1.length;i++){
    let multiply=a[i]*b[i];
    product.push(multiply);
}
console.log(product);

}
 let arr1=[23,4,32,4,5654,4,3,3];
let arr2=[3,2,4,5,7,9,4,6];
multiply(arr1,arr2);
// inbuilt function is that which make your task easy..........
let x="12";
let y="75";
console.log(x+y);
let num1=Number(x);
let num2=Number(y);
console.log(num1+num2);
// in this number is a inbuit funtion..
// we can only convert str numbers..
let str=x.toString();
let str1=y.toString();
console.log(typeof(str),typeof(str1));
// documentation is the source of information about the tech that you want to use written by the developer.
// create own split inbuilt function..
let string='the nishu is a that kind of animal that  has no brain.'
function mysplit(a){


let bag="";
let arr=[];
for(let i=0;i<a.length;i++){
    if(a[i]!=" "){
        bag=bag+string[i];

    }else{
        arr.push(bag);
        bag="";
    }
}
arr.push(bag);

console.log(arr);
}
mysplit(string)
 







  
 

  




