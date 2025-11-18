// classes && default parameters in function ..
// class --> its just a dabba in one box class ki state/property the second one behaviour/functionality..
/* class human {
    // properties...
    name = "nikku";// public mark .
    #ht =80;// private not accsses outside the class.
    wt;
    age ;
    class ="12th";
    // constructor its use  for inserting the value 
    constructor(newage,newweight){
        this.age=newage;
        this.wt=newweight;
    }
    // behaviour...
    walking(){
        console.log("i am the knight king",this.#ht);

    }
    running(){
        console.log("i am the king ");

    }
    // getter and setter 
    // getter is to access the private value 
    // setter is to update the private value
    // its like function..
    get fetchht() {
        return this.#ht;
    }
    set modifyht(val){
        return this.#ht=Val;
    }
}
let obj =new human(17,66);
 console.log(obj.fetchht);
obj.walking();*/ 

// default parameters...
// it allow to use function with default parameters..
/* function sayname (myname="naveen",sirname=myname.toUpperCase()){
    console.log("my name is :",myname," ", sirname);
}
sayname();


*/
// with objects..
/* function solve(value={age:17,wt:66,ht:"175cm"}){
    console.log("hello ji",value)

}
solve();*/
// we also insert an array in this ....
/* function solve(value=["nikku","sharma","vlogs"]){
    console.log("hello ji",value)

}
solve();*/ 
/* function solve(value="nikku"){
    console.log("hello ji",value)

}
solve(undefined);*/
//  defaut parameters with function:
/* let getage= ()=>{
    return 175;

}
let utility=(naam="nikku",age=getage())=>{
    console.log(naam," ",age);

}
utility();*/ 

// in built obejcts...............(math)
/* console.log("nikku");
console.log(Math.PI);
console.log(Math.max(3,5,7,9,56,0,8,6,5,));
console.log(Math.atan(10));
console.log(Math.round(1.5));
console.log(Math.ceil(4.1));
console.log(Math.sqrt(5));
console.log(Math.pow(2,10))*/
// in-built object ........................... (date)
/* let current=new Date();
let date=new Date("april 23 2008 05:00");
let newdate=new Date(2007,3,22,17);
console.log(newdate.setFullYear(2008));
console.log(newdate);
*/
// lecture no. : 48
// object cloning && garbage collector..

// dynamic in nature  objects(changing a property between its runtime)
/* let obj={
    age:17,
    wt:66,
    ht:175

};
console.log(obj);
obj.color="red";
console.log(obj);

*/
// object cloning......
// with spread operator..{...src}
/* let src={
    age:17,
    wt:66,
    ht:175
};
// let dest={...src};
let dest=src;
src.age=90;
console.log("src:",src)
console.log("dest:",dest);
*/
// cloning with assign..let dest =Object.assign({},src,src2);
/* let src={
    age:17,
    wt:66,
    ht:175
};
let src2={
    value:101,
    name:"nikku",
    skill:"all rounder"
};

src.age=90;
let dest =Object.assign({},src,src2);
console.log("src:",src)
console.log("dest:",dest);
*/ 
// cloning whith iteratrion....
/* let src={
    age:17,
    wt:66,
    ht:175
};
let dest={};
for(let key in src){
    let newkey=key;
    let newvalue =src[key];
    // inserting newkey and value in dest and create a clone 
    dest[newkey]=newvalue;
};
src.age=90;
console.log("src:",src)
console.log("dest:",dest);
*/
// garbage collector......
// so that memory which no longer in use can be freed by using this tool called garbage collector..
// memory leaks ki jo memory free honi chiye thi vo nhi hain...
// its manage memory leaks..



// lecture no.(50) ..............error handling in javascript
// error is just and event which empact or disturbed normal flow of execution of your code in called error..
// type of error-->
// 1. syntex error/compile time error 2.refrence error/runtime error
// handling
// try -catch block..
 /* try{
    console.log("try block starts here");
    // refrence error..
    console.log(n);
    console.log("try block end here");
}
catch(nikku){
    // define karte h,what will i do with error.
    // retry logic 
    // fallback mechanism
    // logging
    // custom error
    console.log("you are in catch block");
    console.log("your error is here",nikku)

}
// finally block
finally{
    console.log("i will run everytime ,as i am finally block")
}*/ 
// throw is a keyword which is use create own custom error
// like nikku error ,nishu error.
/* try{
    // refrence type
    console.log(me);
}
catch(err){
    throw new Error ("nangad phle declare t krle ");
    
}*/
/* let errcode =100;
if(errcode==100){
    throw new Error("hatt nishu chapri nangad ma btaoga tn nangad phle dhang t syntex to likh le kare ga coding");
}

*/
// dom manipulation with html
// bom (browser object mode)
// window object it is a globle object which is create by browser itself..
//  dom bom js core ..
// first things was acces karna......
// i learned html access or get/set update change 
// dom have lot of methods like getelementbyid and qurryselector and lot of things ..
// and i also see innerhtml and outer html ......


























































































console.log("popat bnaya");
