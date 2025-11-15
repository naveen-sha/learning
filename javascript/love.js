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



