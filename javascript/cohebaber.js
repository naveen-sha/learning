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
map--
filter--
reduce--
sort--
indexof--
find--
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

}
// arr.forEach((value,index)=>{
//     console.log("number:",value,"index:",index);
// })
*/

























