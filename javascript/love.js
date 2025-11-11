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
function sayname (myname="naveen",sirname=myname.toUpperCase()){
    console.log("my name is :",myname," ", sirname);
}
sayname();
console.log(sayname(myname))

