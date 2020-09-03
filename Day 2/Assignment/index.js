//Number 1//
function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("e", 5);
    document.getElementById("demo").innerHTML = n;
    }

//Number 2//
function toSeconds(str) {
    var pieces = str.split(":");
    var result = Number(pieces[0]) * 60 + Number(pieces[1]);
    return(result.toFixed(3));
}
console.log(toSeconds("1:29.460")); 

//Number 3//
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

//Number 4//
 // input array contain some elements. 
 var array = ["apple", "blue", "egg", "big", "vegie"]; 
 // method (return element > a). 
 var found = array.find(function (element) { 
 return element > "a"; 
 }); 
 // Printing desired values. 
 document.write(found); 

//Number 5//
var arr = [0, 1, 2, 3].reverse();
document.write("Reversed array is : " + arr );


