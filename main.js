console.time("now");
console.timeEnd("now");

const input = document.getElementById("input");
const button = document.getElementById("clickbutton");
const form = document.getElementById("form");
const text = document.getElementsByTagName("h1")[0];

function changeValue() {
  let value = input.value;

  if (value.trim().length < 1) {
    text.innerText = "Lmao put something";
    return;
  }
  text.innerText = value;
}

form.onsubmit = (e) => {
  e.preventDefault();
  changeValue();
};

button.onclick = changeValue;

// array  tests

const arr = [3, 12, 0, 1, 19, 5];

const reduceResult = arr.reduce((sum, val, index) => {
  sum["number " + (index + 1)] = val;
  return sum;
}, {});

const copyWithinResult = [...arr].copyWithin(2, 0, 2);

const filterResult = arr.filter((val) => val > 3);
console.log("[array]", arr);
console.log("[array] reduce result : ", reduceResult);
console.log("[array] copyWithin result : ", copyWithinResult);
console.log("[array] entries result : ", arr.entries().next());
console.log("[array] filter result : ", filterResult);
console.log("[Math] max number : ", Math.max(...arr));

//object testing

const person = {
  name: "Hamida Oussama Islem",
  age: 22,
  birthDate: new Date("07/12/2000"),
  nameHim: function () {
    console.log(
      `his name is : ${this.name} , he is ${this.age} years old, and was born the ${this.birthDate}`
    );
  },
};

const { name, age, birthDate } = person;

console.log("[object]", person);
console.log("[object] destructed variables : ", name, age, birthDate);
person.nameHim();
