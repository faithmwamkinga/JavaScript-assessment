// Write a function that takes in a string and returns it when reversed
function string(food)
let food = "eating";
let sortedFood = string(food.sort());
let reversedFood=reverse(sortedFood)
console.log(reversedFood);

// Qn 2 Write a function that takes in the following array and consoles the target if it is found else
// null
function binary(num){
    let left = 0;
    let right = array.length-1;
    let middle = Math.floor(left+right/2);

    if(middle===Target){
        return Target

    }
    else{
        return null
    }


}
let num = [2,8,0,23,5,45,76];
Target = 23
console.log(num);
binary(num)
// Qn 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// function multiplied(numArray)
let numArray = [12,87,45,75,23,64,73];
let newNum = [];
numArray.forEach(item => {
     item*4
    
});
 console.log(newNum.push(item*4));


