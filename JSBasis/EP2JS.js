function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 +32;
    var message = cTemp + "\xb0C is " + cToFahr +"\xb0F";
    console.log(message);
}
cToF(30);
function FToc(Fahranheit){
    var FTemp = Fahranheit;
    var FToCelsius = (FTemp-32) * 5 / 9;
    var message = FTemp + "\xb0F is" +FToCelsius + "\xb0C";
    console.log(message);
}
FToc(86);
 
var person = {
    firstname : "GM",
    lestname : "1",
    eyescoler : "Balck",
    fullname: function(){
        return this.firstname +""+this.lestname
    }
};
console.log(person.fullname());

function DisplayDate(){
    document.getElementById('demo').innerHTML = Date();
}
var x = "jo\" \"save"
console.log(x);
//Array Literal
var myArr = ["gm", "bm", "toyota"];
//Array Constructor
var myArr2 = new Array("gm", "bm", "toyota")
console.log(myArr[1]);
console.log(myArr2[0]);

var fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit[0] = "Kiwi";
delete fruit[0];
fruit.splice(2, 0, "Lemon");
document.getElementById("demo").innerHTML = fruit.join(" - ");

var arr1 = ["value1", "value2"]
var arr2 = ["value3", "value4"]
var arr3 = ["value5", "value6"]
var concatArr = arr1.concat(arr2, arr3);
var myArr = arr1.slice(1);
// 7data type

var myNum