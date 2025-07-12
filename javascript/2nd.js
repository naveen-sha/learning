// arithmetics operators
// let a = 4;
// let b = 3;
// console.log("a=",a,"b=", b);
// console.log("a - b =",  a-b);
// console.log("a + b =",  a+b);
// console.log("a * b =",  a*b);
// console.log("a / b =",  a/b);
// console.log("a % b =",  a%b);
//console.log("a ** b =",  a**b);
/* modulus reminder
exponentition power*/
/*
unary operator
increment
decrement
++a
a++
*/
// console.log("a=",a,"b=", b);
// a--;
// console.log("++a=",a++,);
 
// assignment opertors
/* 
=, +=,-=,*=,**=,%=
*/
// a -= 2;
// console.log("a=",a,"b=", b);

// comparison operators
/* ==
===
!=
!==
>
>=
<
<=*/
// console.log("a==b", a<=b);

// LOGICAL OPERATOR 
/*
and &&
or||
not!
*/
// let a = 4;
// let b = 3;
// let cond1 = a>b;
// let cond2 = a<b;
// console.log("cond1 && cond2 =", !(cond1));

// conditional statement

// let age= 199;
// let mode = 'dark';
// let color;
// if ( age=== 18) {
//     console.log ("you can buy a mobile phone")
// } else if (age===20){
//     console.log('absolutely you can buy a phone')
// }else {
//     console.log('you cannot buy a phone')
// }

// if( mode === "dark") {
//     color = 'black';
// } else {
//     color = 'white';
// }
// console.log(color)
// let num= 10 ;
// if(num%2 === 0) {
//     console.log(num," is even")
// } else {
//     console.log(num," is odd")
// }
// let age= 18;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result)

// let num = prompt ("Enter a number");
// if (num % 3 === 0){
// console.log(num," is multiple of 3")
// } else { console.log(num," is not multiple of 3")}

// let score = prompt('enter your score')
// if (score>=80 && score <= 100){
//     Grade = 'A';
// } else if (score>=70 && score <= 89) {
//     Grade = 'B';
// } if (score>=60 && score <= 69) {
// Grade = 'C';
// } else if (score>=50 && score <= 59) {
// Grade = 'D';
// } if (score>=0 && score <= 49) {
//    Grade = 'F'
// };
// console.log("your grades are",Grade );
// naveen={
//     naveen 
// }

// let age=26;
// if(age>20){
//     console.log("you can do anything");
// }else if
//     (age>21){;
//     console.log("you cant do anything");
// }else
// console.log("i dont know")
// let mod="dark"
// let color;
//  if (mod==="dark"){
//     color="black";
//  }
//  if(mod==="light"){
//     color="white";
//  }
//  console.log(color);

// let mod="light"
// let color;
//  if (mod==="dark"){
//     color="black";
//  }else{
//     color="white";
//  }
//  console.log(color);

// let num = 12;
//  if(num%2=== 0){
//    num="even";
//  }else{
//    num="odd";
//  }
//  console.log(num)
// let mode ="ocean";
// let color;
// if(mode==="dark"){
//    color="black";
// }else if(mode==="light"){
//    color="white";
// }else if(mode==="ocean"){
//    color="blue";
// }else {
//    color="white";
// }
// console.log("your color is",color);
// // now we can study ternary operator...
// let age=25;
// let result=age>=24 ? "adult":"not adult";
//  console.log(result) similer to if-else ....
// practice question........
// alert("hello nikku good job")this is for one time msg...
// prompt("hi,so what's going on today nikku")
// let promt=prompt("hi,so what's going on today nikku");
// console.log(promt);
// let num=prompt("enter thr number:")
// if (num % 7===0){
//    console.log(num," is the multiple of 7 ");
// }else{
//    console.log(num,"is not a multiple of 7");
// }
// let score = prompt("enter your score:");
// if (score >=80 && score <=100){
//     grade="excellent work :A";
// }else if(score>=70 && score<=100){
//     grade="B";
// }if (score>=60 && score <=69){
//     grade="C";
// }else if(score>=50 && score <=59 ){
//     grade="D";
// }if(score>=0 && score <=49){
//     grade = "f";
// }
// console.log("your grade is :",grade)
// loops in javascript.........
//  for loop .
//  print 1 to 5...
// for(let count=1; count<=10;count++){
//     console.log("naveen");
//     }
// calculate the sum of 1 to n numbers
// let sum=0;
// for(let i=1;i<=9;i++){
//     sum=sum+i;
// }
// console.log("sum:",sum)
// console.log("loop is ended")
// infinite loop .....
// for(let i=1;i>=7;i++){
    
   
//     console.log("naveen",i);
// }
// while loop ........
// let i=1;
// while(i<=5){
//     console.log('naveen:',i);
//     i++;
// }
// do-while loop ...
// let i=1;
// do{
//     console.log("naveen",i);
//     i++;
// }while(i<=5);--> this is compalsory in do-while loop..
// for-of loop.and for-in loop..
//  for-of loop --> its for printing string...
// let str="naveen ";
// for(let i of str ){
//     console.log("i",i)
// } basiclly its for printing string characters..its also print lenght of the characters
//  for-of loop used for (strings and array)
// for-in loop....

// for(let i=0;i<=100;i++){
    
//     if(i%2!==0){
//         console.log("i:",i);
//     }

// }
// practice question .............
//  let gamenum=25;
// let usernum=prompt("guess the game number : ");
// while (usernum !=gamenum){
//     usernum=prompt("you entered wrong number. guess again :");

// }
// console.log("congratulation, you entered the right number");
// strings .................
/* let str ="naveen";
console.log(str[3]);
// (backtik template literals)special type string (``)
let obj={
    item:"pen",
    price:10,
};
let output =`the cost of ${obj.item} is ${obj.price}rupees`;
console.log(output);
let backtick=`this is a template literal ${1+2+3}`;
console.log(backtick);
// (\n)==> escape characters ==> gives us next line ..
console.log("nav \n een");
// (\t)==> for tap space ..
let stri ="nav \t een";
console.log(stri.length) /**/ 
//  string methods .........
// let str='naveen'
// to upper(NAVEEN) case & lower case(naveen)
// console.log(str);
// let str="             naveen         nikku        ";
// console.log(str.trim());
//  str.slice (start,end?)// return pat of string 
// let str="488435895"====> same with string..
// console.log(str.slice (2,5))
// str1.concat(str2)// joins str2 with str1
// let str1="nav"
// let str2="een"
// let res=str1.concat(str2);
// console.log(res)
//  we can also print with + like a+bwith strings with number
// str.replace(searchval,newval)...;
// let str ="navean";
// console.log(str.replaceAll("a","e"));
// str .charAT(idx).....
// let str="i love me ";
// console.log(str.charAT(3));
// practice question ..........\
// let username= prompt("enter your full name :");
// let fullname="@"+username+ username.length+"gmail.com";
// console.log(fullname);
//  my  longtarika....

//     let name="@";
//     const name2 =(name.concat(username));
    

//     const name3=name2.concat(name2.length);
//     const name4 =name3.concat("gmail.com.")
//     console.log(name4);




