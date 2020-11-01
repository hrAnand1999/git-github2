let a=10;/* variable initialization*/
        console.log(a);
        let b=[1,2,3,4,5];
        console.log(b);

        console.log("Javascript");
// javascript
// variables, Arrays, Function, Loops, Classes, Objects


/*c = 20;// Global variable
var d = 30;//Function Scope
let e = 50;//Block Scope


let arr=["Apple", "Mango", "Guava"];
for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}

arr.push("Banana"); //Insert at back
arr.pop(); //remove from back
arr.shift(); //remove from front
arr.unshift("Kiwi"); //insert at front
arr.indexOf("Kiwi"); //finds you the index


if(arr[0]=="Apple")
{
    console.log("Apple");
}
else
console.log("No it is",arr[0]);
*/


/*
function fun(){
    let a=5;
    if(a==5)
    {
         f=10; //let has a block scope, var has a function scope
        console.log("Inside",f);
    }
    console.log("Outside",f);
}



fun();
console.log("Global",f);

square_root(100);
sqrt_n(100);

function square_root(n) // this way the function define at top
{
    console.log("In first sqrt fn");
     //console.log(Math.sqrt(n));
     return "Hello";
}


//function Hoisting also called as function expression
var sqrt_n = function(){ //this way the function define here so if we call function from above that will give error
    console.log("In second Sqrt fn");
    return;
}
*/
/*
//Allows to create object without defining classes
 var bird ={
     x:100,
     y:20,
     color : "blue",
     eggs:["one","two","three"],

     fly:function()
     {
         console.log("Bird is flying",this.x,this.y);
     }
 };

 //for loop

 for(let i=0;i<bird.eggs.length;i++)
 {
     console.log(bird.eggs[i]);
 }


 //for each loop
 bird.eggs.forEach(function(idx,val){
     console.log(idx,val);
 })


 */

 //Array
 /*let arr=[1,"Hello",false,[2,3]];
 console.log(typeof arr[3]);//it is allow to create array 
                            //having different variables


//for-of loop

for(let val of arr)
{
    console.log(val);
}

//for in loop

for(let index in arr)
{
    console.log(arr[index]);
}
*/
//changing data in array

//let notes=["sa","re","ga","ma","pa","dha","ni","sha"];
//slice
//console.log(notes.slice(4,6)) //first par- initial index, second par-last index
//console.log(notes);


//splice
/*let omit=notes.splice(4,2) //first par- initial index, second index- length
console.log(omit);
console.log(notes);*/

//splice part 2
//notes.splice(0,3,"har","sh","anand"); //Ist-initial pos, 2- length, remian- value to be replaced
//console.log(notes);

//concat
/*console.log(notes.concat("aise"));
console.log(notes.concat(["waise","hi"]));
console.log(notes);
*/


//Strings
//let str="this is harsh's string"; //with single quote we cann't use 's 

//we can also use notation for string
/*let p='harsh';
let str='this is ${p}'s string';
console.log(str);*/

/*let longstr='this is \n \
a very long \
string';
console.log(longstr);
*/

//Searching
/*let s="this is a easy job";
console.log(s.lastIndexOf("is"));
*/

//String Methods
//let mainStr= "this-is-a-long-string";
//let smallStr=mainStr.substring(2,5);


//let smallStr=mainStr.slice(-6,-3);//we can use negative index as well with slicing


/*let smallStr=mainStr.substr(3,5);//2nd par is length
console.log(smallStr);
*/

//different ways of creating object
//1)
var apple ={
    taste:"sweet",
    color:"red",
}
function fruit(taste,color){
    this.taste=taste;
    this.color=color;
}
//2)
let mango= new fruit("yellow","sweet");
let orange=new fruit("orange","sour");

//different ways of creating class
//class declaration
class FruitClass{
    constructor(taste,color)
    {
        this.taste=taste;
        this.color=color;
    }
}
let Kiwi = new FruitClass("sour","green");
 
// class Expression
let FruitClass2 = class{
    constructor(taste,color){
        this.taste=taste;
        this.color=color;
    }
}

let kiwi2 = new FruitClass2("green","halka");
