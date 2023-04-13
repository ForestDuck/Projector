
// Рішення за допомогою ітератора:
const list = document.getElementById("iterator");
      const Iterator = {
        [Symbol.iterator]() {
          let i = 1;
          return {
            next() {
              if (i <= 100) {
                if (i % 15 === 0) {
                  i++;
                  return { value: "FizzBuzz", done: false };
                } else if (i % 3 === 0) {
                  i++;
                  return { value: "Fizz", done: false };
                } else if (i % 5 === 0) {
                  i++;
                  return { value: "Buzz", done: false };
                } else {
                  const result = { value: i, done: false };
                  i++;
                  return result;
                }
              } else {
                return { done: true };
              }
            }
          };
        }
      };

      for (const value of  Iterator) {
        const item = document.createElement("li");
        item.textContent = value;
        list.appendChild(item);
      }


// Рішення за допомогою генераторів:
const outputList = document.getElementById("generator");
function* funcGenerator() {
    let i = 1;
    while (i <= 100) {
      if (i % 15 === 0) {
        yield "FizzBuzz";
      } else if (i % 3 === 0) {
        yield "Fizz";
      } else if (i % 5 === 0) {
        yield "Buzz";
      } else {
        yield i;
      }
      i++;
    }
  }

  const generator = funcGenerator();

  for (const value of generator) {
    const listItem = document.createElement("li");
    listItem.innerText = value;
    outputList.appendChild(listItem);
  }

// Задача 2 - генератор випадкових чисел
  function* generateRandomNumbers(max, quantity) {
    for (let i = 0; i < quantity; i++) {
      yield Math.floor(Math.random() * max) + 1;
    }
  }

  const randomNumberList = document.getElementById("random-number-list");

  for (const randomNumber of generateRandomNumbers(45, 4)) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = randomNumber;
    randomNumberList.appendChild(li);
  }