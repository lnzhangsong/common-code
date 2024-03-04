// Bubbling Sort
// 时间复杂度 O(n^2) 空间复杂度 O(1) 

const changeNums = (num1, num2) => {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

// 双层循环 如果当前元素大于下标为j+1的元素，则交换
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        changeNums(arr[j], arr[j + 1])
      }
    }
  }
  return arr
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 优化： 某次循环结束，说明已经排好序了，直接返回
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSort = true; // 关键 上层循环置为 true
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        changeNums(arr[j], arr[j + 1])
        isSort = false; // 当前循环 未进入排序
      }
    }
    if (isSort) {
      break;
    }
  }
}
