const recSum = (x) => {
  if (x.length == 1) {
    return parseInt(x);
  } else {
    const y = parseInt(x.shift());
    return y + recSum(x);
  }
}

console.log(recSum([2, 4, 10]))