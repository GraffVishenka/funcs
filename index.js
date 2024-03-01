////
//// Массивы
////

// Задание 1

const arr = ["яблоко", "осёл", "олень", "виноград"];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i].split("").reverse().join("");
}

// Задание 2

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums.indexOf(nums[i]) % 2 !== 0) {
    newNums.push(nums[i]);
  }
}

// Задание 3

const originalArray = [10, 20, 30, 40, 50];
let reverse = [];

for (var i = originalArray.length - 1; i >= 0; i--) {
  reverse.push(originalArray[i]);
}

// Задание 4

let evenNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0 && nums[i] !== 0) {
    evenNums.push(nums[i]);
  }
}

// Задание 5

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] * numbers[i];
}

////
//// Объекты
////

// Задание 1

const alph = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const alphCode = {};

for (let i = 0; i < alph.length; i++) {
  alphCode[alph[i]] = i;
}

const encode = (key, text) => {
  let code = "";

  for (let i = 0; i < text.length; i++) {
    code +=
      alph[
        (alphCode[text[i].toUpperCase()] +
          alphCode[key[i % key.length].toUpperCase()]) %
          alph.length
      ];
  }
  return code;
};

const decode = (key, text) => {
  let code = "";

  for (let i = 0; i < text.length; i++) {
    code +=
      alph[
        (alphCode[text[i].toUpperCase()] -
          alphCode[key[i % key.length].toUpperCase()] +
          alph.length) %
          alph.length
      ];
  }
  return code;
};

//console.log("encoded word: ", encode("ключ", "привет"))
//console.log("decoded word: ", decode("ключ", "ъьжщпю"))

// Задание 2

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    if (this.tasks === "") {
      this.tasks = [{ taskName: name, complete: false }];
    } else {
      this.tasks = [...this.tasks, { taskName: name, complete: false }];
    }
  }

  showTasks() {
    let count = 0;
    if (this.tasks === "") {
      console.log("Список дел пуст.");
    } else {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].complete === false) {
          count++;
          console.log(this.tasks[i].taskName);
        }
      }
      {
        count === 0 ? console.log("Список дел пуст.") : "";
      }
    }
  }

  completeTask(name) {
    this.tasks.map((task) => {
      if (task.taskName === name) {
        task.complete = true;
      }
    });
  }
}

const taskManager = new TaskManager();

//taskManager.addTask("Выучить JS");
//taskManager.addTask("Выучить TS");
//taskManager.completeTask("Выучить JS");
//taskManager.completeTask("Выучить TS");

//taskManager.showTasks();

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

// Задание 4

const wordCounter = (str) => {
  let a = str.split(" ");
  return a.reduce(function (acc, item) {
    item = item.toLowerCase();
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

//console.log(wordCounter("Программирование это просто, программирование это круто!"));

// Задание 5

const books = [
  { id: 1, title: "JavaScript: The Good Parts", copies: 5 },
  { id: 2, title: "You Don't Know JS", copies: 3 },
  { id: 3, title: "Eloquent JavaScript", copies: 7 },
];

books.map((book) =>{
  //console.log(`${book.title}: ${book.copies}`)
})

//Array.from(books, ({title, copies}) => console.log(`${title}: ${copies}`))