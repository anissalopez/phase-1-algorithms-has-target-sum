function hasTargetSum(array, target) {
  // Write your algorithm her
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < array.length; i++){
    num1 = array[i];
    for (let j = i + 1; j < array.length; j++){
      num2 = array[j];
      
        if (num1 + num2 === target){
        return true;
      
       }
    }
  }
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
need to write a function that loops through an array and adds each number together to see if their sum is equal to the target 

I need a loop 

and I need to figure out how to get that loop to add each number together to test against the target number 



array [0] would be 3 

I need to test the indexes in the array like so:
[0][1], [0][2], 0[3] until 0[n] with n representing the last integer in the array. To get the last integer in the array i would have to subtract the arrays length -1
to find that integers index in the array 

then i would need to test [1][2], [1][3], [1][n]


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
