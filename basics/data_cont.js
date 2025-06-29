// datatypes are diided on the basis of how they can be accessed
/*primitive
7 types : string, number,boolean.,null,undefined,symbol,bigint 

*/
const score =100
const value =100.3
const loggedin = false
const temp =null

let email;
const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id=== anotherid);




//refernce (non primitive)
//array,objects,functions
//is javascript dynamic or static typed? 

const heros = ["ironman","captain america"]
let myobj =
{
    name :"hitesh",
    age : 22
}
 const myfunction = function(){
    console.log("hello world");
    
 }