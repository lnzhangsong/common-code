// 30 题 两个数组合并成一个数组
// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，
// 合并为['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

const merge = (arr1, arr2) => {
  const arr3 = []
  arr1.foreach((_item, index) => {
    if (index % 2 === 0) {
      arr3.push(arr1[index], arr1[index + 1], arr2[index / 2])
    }
  })
  return arr3
}


console.log(merge(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))

