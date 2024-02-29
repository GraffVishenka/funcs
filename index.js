// 1 Задание

const vowelsCount = (str) => {
  let count = 0;
  const vowelsChars = [
    "a",
    "e",
    "y",
    "u",
    "i",
    "o",
    "е",
    "а",
    "о",
    "э",
    "я",
    "и",
    "ю",
  ];

  for (let char of str.substr(0, 14).toLowerCase()) {
    if (vowelsChars.includes(char)) {
      count++;
    }
  }
  return count;
};

// 2 Задание

const swapA = (str) => {
  let newStr = "";
  const swapChars = ["a", "A", "а", "А"];
  for (let i = 0; i < 15; i++) {
    if (swapChars.includes(str[i])) {
      newStr += "#";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

// 3 Задание

const firstLetterIsUppper = (str) => {
  return str
    .substr(0, 14)
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
};

// 4 Задание

const sum = (nums) => {
  if (nums.length === 0) return 0;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

// 5 Задание

const evenCount = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0 && i !== 0) {
      console.log(i);
    }
  }
};

// 6 Задание

const getLength = (source) => source.map((str) => str.length);

// 7 Задание

const removeDups = (arr) => {
  let unique = [],
    hashes = {};
  for (let i = 0; i < arr.length; i++) {
    let currentHash = JSON.stringify(!!arr[i] ? arr[i] : "" + arr[i]);
    if (!hashes[currentHash]) {
      unique.push(arr[i]);
      hashes[currentHash] = true;
    }
  }
  return unique;
};

console.log(removeDups([1, 1, 2, 3, 4, 66, 6, 6]));
