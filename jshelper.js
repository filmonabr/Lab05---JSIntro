/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));


function maxOfTwo(a, b){
    return max(a,b);
}

/* max3 takes 2 numbers as arguments and returns the largest */
console.log("\nExpected output of maxOfTwo(5, 4) is 4  " + myFunctionTest(4, function () {
    return maxOfTwo(5, 4);
}));
console.log("Expected output of maxOfTwo(4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfTwo(4, 44);
}));
console.log("Expected output of maxOfTwo(55, 44) is 55  " + myFunctionTest(55, function () {
    return maxOfTwo(55, 44);
}));

// Vowel Test

function isVowel(str){
    var vow=["a", "e", "i", "o", "u"];
    for(var j=0; j<vow.length;j++){
        if(str === vow[j]){
            //         return "TEST SUCCEEDED, "+str + " is VOWEL";
            return "VOWEL"
        }
        else{
            //return "TEST FAILED. "+str + " is NOT VOWEL";
            return "NOT VOWEL"
        }
    }
}

console.log("\n Expected output of isVowel('a') is \'vowel\'; " + isVowel('a'));
console.log(" Expected output of isVowel('b') is \'vowel\'; " + isVowel('b'));
console.log("\nExpected output of isVowel('a') is \"Vowel\"   " + myFunctionTest("VOWEL", function () {
    return isVowel("a");
}));
console.log("Expected output of isVowel('b') is \"Vowel\"  " + myFunctionTest("VOWEL", function () {
    return isVowel("b");
}));
console.log("Expected output of isVowel('i') is \"Vowel\"   " + myFunctionTest("NOT VOWEL", function () {
    return isVowel("i");
}));


//sum function
function sum(arr){
    var total = 0;
    for(var i=0; i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}

//product function
function multiply(arr){
    var product = 1;
    for(var i=0; i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}
//sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
console.log("\n The sum of sum(1, 2, 3, 4) is; " + sum([1, 2, 3, 4]));
console.log(" The product of multiply(1, 2, 3, 4) is; " + multiply([1, 2, 3, 4]));


//Reverse function
function reverse(arr){
    var revv = "";
    for(var i=arr.length-1;i>=0;i--){

        revv+=arr[i];
    }
    return revv;
}

console.log("\nReversed string looks like \""+reverse('Filmon')+"\"");

//Longest word finder
function findLongestWord(arr){
    var l = arr[0].length;
    for(var i=1; i<arr.length;i++){
        if(arr[i].length>l){
            l = arr[i].length;
        }
    }
    return l;
}
//  console.log("\n"+findLongestWord(["Filmon", "Abraham", "Weldesilassie", "Araya"]));
console.log("Expected output of findLongestWord([\"Filmon\", \"Abraham\", \"Weldesilassie\", \"Araya\"]) is \"13\"   " + myFunctionTest(13, function () {
    return findLongestWord(["Filmon", "Abraham", "Weldesilassie", "Araya"]);
}));
console.log("Expected output of findLongestWord([\"Tewelde\", \"John\", \"McDavings\", \"Mihreteab\"]) is \"12\"   " + myFunctionTest(12, function () {
    return findLongestWord(["Tewelde", "John", "McDavings", "Mihreteab"]);
}));
console.log("Expected output of findLongestWord([\"Ermias\", \"Abiel\", \"Senait\", \"Ramsey\"]) is \"18\"   " + myFunctionTest(18, function () {
    return findLongestWord(["Ermias", "Abiel", "Senait", "Ramsey"]);
}));

//Longest word finder
function filterLongWords(arr, k){
    var l = [];
    for(var i=1; i<arr.length;i++){
        if(arr[i].length>k){
            l.push(arr[i]);
        }
    }
    return l;
}
//  console.log("\n"+findLongestWord(["Filmon", "Abraham", "Weldesilassie", "Araya"]));
console.log("\nExpected output of findLongestWord([\"Filmon\", \"Abraham\", \"Weldesilassie\", \"Araya\"], 6) is   " + myFunctionTest(["Abraham", "Weldesilassie"], function () {
    return filterLongWords(["Filmon", "Abraham", "Weldesilassie", "Araya"], 6);
}));
console.log("Expected output of findLongestWord([\"Tewelde\", \"John\", \"McDavings\", \"Mihreteab\"]) is   " + myFunctionTest(["McDavings"], function () {
    return filterLongWords(["Tewelde", "John", "McDavings", "Mihreteab"], 5);
}));
console.log("Expected output of findLongestWord([\"Ermias\", \"Abiel\", \"Senait\", \"Ramsey\"]) is   " + myFunctionTest(["Senait", "Ramsey"], function () {
    return filterLongWords(["Ermias", "Abiel", "Senait", "Ramsey"], 5);
}));

/* (9-A) mulitiply each element by 10 */

var a = [1,3,5,3,3];
var b= [10,30,50,30,30];

function multiplyArrayElements(a) {

    var res1 = a.map(function (element, i, array) {

        return element * 10;

    });
    return res1.toString();
}

console.log("\nExpected output of multiplyArrayElements([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTest(b.toString(), function(){

    return multiplyArrayElements(a);

}));

/* (9-B) return with all elements equal to 3 */
var a = [1,3,5,3,3];
var m= [1,5];

function filterNumbers3(a) {

    var res2 = a.filter(function (elem, i, array) {
        //return elem !== 3;})
        return elem !== 3;
    });

    return res2.toString();
}

console.log("\nExpected output of filterNumbers3([1,3,5,3,3]) is [1,5] " + myFunctionTest(m.toString(), function(){

    return filterNumbers3(a);

}));


var a = [1,3,5,3,3];

var n= 135;

function productOfAll(a){

    var res3= a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });

    return res3;

}

console.log("\nExpected output of productOfAll([1,3,5,3,3]) is 135 " + myFunctionTest(n, function(){

    return productOfAll(a);

}));