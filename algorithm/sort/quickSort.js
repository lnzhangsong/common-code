/**
 * quick sort
 * @param { Array } nums 
 */
const quickSort = (nums) => {
  if (nums.length < 1) return nums; // termination: length of nums less then 1 
  let povitIndex = Math.floor(nums.length / 2); // pivot index 
  let povit = nums.splice(povitIndex, 1)[0]; // pivot
  let left = []; // left array
  let right = []; // right array
  for (let i = 0; i < nums.length; i++) { // loop
    if(povit > nums[i]) { // if nums[i] less then pivot
      left.push(nums[i]); // push nums[i] to left array
    } else { // if nums[i] greater then pivot
      right.push(nums[i]); // push nums[i] to right array
    } 
  }
  return quickSort(left).concat([povit], quickSort(right)); // concat left, pivot, right
}