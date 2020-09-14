function fizzbuzz(ref) {
  let processvalue = ref;
  let a = 1;
  let collectiveArr = [];
  while (a <= processvalue) {
    if (a % 3 === 0 && a % 5 === 0) {
      //console.log("fizzBuzz");
      collectiveArr.push("fizzBuzz");
    } else if (a % 3 === 0) {
      // console.log("Fizz");
      collectiveArr.push("Fizz");
    } else if (a % 5 === 0) {
      // console.log("Buzz");
      collectiveArr.push("Buzz");
    } else {
      collectiveArr.push("--Not Valid--");
    }
    a++;
  }
  return collectiveArr;
}

module.exports = fizzbuzz;
