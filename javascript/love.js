// classes && default parameters in function ..
// class --> its just a dabba in one box class ki state/property the second one behaviour/functionality..
class human {
    // properties...
    name = "nikku";// public mark .
    #ht =80;// private not accsses outside the class.
    wt=190;
    class ="12th";
    // behaviour...
    walking(){
        console.log("i am the knight king",this.#ht);

    }
    running(){
        console.log("i am the king ");

    }
}
let obj =new human();
console.log(obj.class);
obj.walking();