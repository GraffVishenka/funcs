// Задание 1

function caesarCipher(str, shift) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) {
  result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
  } else if (charCode >= 97 && charCode <= 122) {
  result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
  } else {
  result += str.charAt(i);
  }
  }
  return result;
  }
 
  let encrypted = caesarCipher('Hello, world!', 3);
  console.log(encrypted);


// Задание 3

const products = [
  { id: 1, name: "Лаптоп", category: "Электроника" },
  { id: 2, name: "Книга", category: "Литература" },
  { id: 3, name: "Фотоаппарат", category: "Электроника" },
  { id: 4, name: "Сумка", category: "Мода" },
  { id: 5, name: "Книга", category: "Литература" },
  { id: 6, name: "Таблетки", category: "Лекарство" },
];

const groupBy = (key) => {
  return (group = (array) => {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  });
};

const filterProducts = groupBy("category");
