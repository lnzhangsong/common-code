// 第 59 题：给定两个数组，写一个方法来计算它们的交集
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

var nums1 = [2, 2, 1], nums2 = [1 , 2, 2, 3, 4];



// 栈处理 O(n)
const intersection = (arr1, arr2) => {
  const result = []
  while (arr1.length) {
    const arr1Header = arr1.pop()
    if (arr2.includes(arr1Header)) {
      result.push(arr1Header)
      arr2.splice(arr2.indexOf(arr1Header), 1)
    }
  }
  return result;
}


console.log(intersection(nums1, nums2))
