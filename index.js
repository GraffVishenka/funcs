// Задание 1

const createPhoneNumber = (numbers) => {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Задание 2

const uniqueInOrder = (x) => {
  const result = [];
  const input = Array.isArray(x) ? x : x.split("");

  for (let i = 0; i < input.length; ++i) {
    if (input[i] == input[i + 1]) continue;
    result.push(input[i]);
  }

  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Задание 3

const XO = (str) => {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  return x === o;
}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));