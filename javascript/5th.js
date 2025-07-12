/* chapter 5 function & methods ... */
// function ....
// block of code that perform a specific task ,can be invoked (call) whenever needed 
//  in this we can create own function..
// function myfunction (){
//     console.log("so hey guys");
//     console.log("hi,hffhh");
// }
// myfunction();
// redundancy --> repeat .but thats not good thing..
// function myfunction(msg,n){
//     console.log(msg*);
//     //  parameter .
// }
// myfunction(
//     "i love me "
//  );
// argument  
// function--> 2 numbers, sum
// function sum (a,b){
   
//    return a*b
   
// }
// let val =sum(3,5);
// console.log(val)
// //  arrow function--->
// let func1 =(x,y)=>{
//     return x*y};
//    console.log("suiiiii");
// practice question..
/* function countvowels(str){
    let count=0;
    for(const char of str){
        if(char ==="a"|| char ==="e"||char ==="i"|| char==="o"||char==="u"){
          count++;  
        }
    }
    
}
countvowels();*/
/*let countvowels=(str)=>{
    let count=0;
    for(const char of str){
        if(char ==="a"|| char ==="e"||char ==="i"|| char==="o"||char==="u"){
          count++;  
        }
    }
    return count
}
*/
// foreach loop in arrays..
let arr= ["nishu","nikku","naveen","nishant"];
// arr.forEach(function printval(val){
//     console.log(val);
// })
arr.forEach((val,idx,arr) =>{
    console.log(val.toUpperCase(),idx,arr);

})


 