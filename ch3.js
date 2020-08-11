function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) count++;
  }
  console.log(count);
  return count;
}

countChar("test", "t");
countChar("testiest", "T");

//function isEven(n) {
//  // convert negative values to positive values
//  if (n < 0) n = n * -1;
//
//  if (n == 0) {
//    console.log("Even number.");
//    return 1;
//  } else if (n == 1) {
//    console.log("Odd number.");
//    return 0;
//  }
//
//  // if n is something other than 0 and one, recursively call isEven
//  else {
//    return isEven(n - 2);
//  }
//}
//
//isEven(7);
//isEven(8);
//isEven(-11);

//function minimum(a, b) {
//  if (a <= b) console.log(a);
//  else console.log(b);
//}
//
//minimum(3, 4);
//minimum(3, 1);
//minimum(6, 6);

//function zeroPad(n, num_dig = 3) {
//  return "0".repeat(num_dig - String(n).length) + String(n);
//}
//
//function countAnimals(n, animal) {
//  let num_str = zeroPad(n);
//  console.log(num_str + " " + animal);
//}
//
//countAnimals(4, "cows");
//countAnimals(14, "chickens");

//function multiplier(factor) {
//  console.log(`factor: ${factor}`);
//  return (number) => number * factor;
//}
//
//let twice = multiplier(2);
//console.log(twice(5));

//function minus(a, b) {
//  if (b === undefined) return -a;
//  else return a - b;
//}
//console.log(minus(10));
//console.log(minus(10, 5));

//function chicken() {
//  return egg();
//}
//function egg() {
//  return chicken();
//}
//console.log(chicken() + " came first.");

/*
 * const square = (x) => x * x;
 * console.log(square(10));
 */

//const hummus = function (factor) {
//  const ingredient = function (amount, unit, name) {
//    let ingredientAmount = amount * factor;
//    if (ingredientAmount > 1) {
//      unit += "s";
//    }
//
//    console.log(`${ingredientAmount} ${unit} ${name}`);
//  };
//
//  ingredient(1, "can", "chickpeas");
//  ingredient(0.25, "cup", "tahini");
//  ingredient(2, "tablespoon", "olive oil");
//};
//
//hummus(2);
