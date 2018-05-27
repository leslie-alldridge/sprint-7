//1. 

//Write a function min that takes two arguments and returns their minimum.

// Your code here.
function min (a, b){
    if (a < b){
        return a;
    }
    else {
        return b;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//2. 

//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) 
//and return a Boolean.

//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? Yes, just use an absolute value so the negative is ignored.

// Your code here.
function isEven(num){
    if(Math.abs(num)%2 > 0){
        return false;
    }
    else {
        return true;
    }
   }
   console.log(isEven(50));
   // → true
   console.log(isEven(75));
   // → false
   console.log(isEven(-1));

//3.

//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” 
//characters there are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates 
//the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Your code here.
function countBs(name){
    var counter = 0;
     for (i = 0; i < name.length; i++){
         if (name[i] === "B"){
             counter ++;
         }
         
     }
     return counter;
    }
    
// second function here

function countChar(word, letter){
    let counter = 0;
     for (let i = 0; i < word.length; i++){
         if (word[i] == letter){
             counter ++;
         }
         
     }
     return counter;
    }
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4