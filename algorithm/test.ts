function isHappy(n: number): boolean {
  const allNumber: string[] = n.toString().split("");
  console.log(allNumber);

  if (allNumber.length === 1 && (allNumber[0] == '1' || allNumber[0] == '7')) {
    return true;
  } else if (allNumber.length === 1 && allNumber[0] != '1') {
    return false;
  }
  const allNumberSquare = allNumber.map(number => Number(number) * Number(number));
  let allNumberSum = 0;
  allNumberSquare.forEach(item => {
    allNumberSum += item;
  })
  return isHappy(allNumberSum);
};

console.log(isHappy(11));
