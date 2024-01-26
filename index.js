/*
I need to make hasTargetSum function that checks if two numbers in an array add up to some target number
For example if the array is [1,2,3,4] and the target number is 6, I know that 2 and 4 add up to 6 so it should
return true. If I have the same array and the target is 10, no two numbers in the array add up to 10 so it should
return false
*/

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i + 1; j <array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Our inner loop performs n iterations for every teration of the outer loop, we end up with O(n * n) or O(n²) 
  (quadratic) for the time complexity of this algorithm.In terms of space complexity, the amount of memory
   needed grows linearly with the size of the input array. We don't need to create any additional data structures
    to store information. So we end up with O(n).


*/

/* 
  Add your pseudocode here
  Iterate over the array of numbers
  for the current number, identify a cmplementary number that adds to our target
  i.e. if our number is 2 and the target is 5, the complementary number is 3
  iterate over the remaining numbers in the arrray
  check if any of the remaining numbers is the complement
  if so, return true
  if we reach the end of the array, return false
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

  console.log("");
    // Negative numbers?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
    // Multiple pairs?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
    // Single numbers?
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));

}

module.exports = hasTargetSum;
