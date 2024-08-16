// //veribale

// let attackBtnN = document.querySelector(".btn:first-child");
// let healthBtnN = document.querySelector(".btn:last-child");
// let attackBtnS = document.querySelector(".sa .btn:first-child");
// let healthBtnS = document.querySelector(".sa .btn:last-child");
// let narutoohealth = document.querySelector(".col-4 div:first-child span");
// let sahealth = document.querySelector(".sa.col-4 div:first-child span");
// // constructor function
function Person(name, power, health, prog) {
  this.name = name;
  this.health = health;
  this.power = power;
  this.prog = prog;

  this.attackBtn = document.querySelector(`.${this.name}.attack`);
  this.healthBtn = document.querySelector(`.${this.name}.health`);
  this.prograssBtn = document.querySelector(`.${this.name} .prog`);
}

//attack function

Person.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.power;
    opponent.prog -= this.power;
    opponent.prograssBtn.style.width = `${opponent.health}%`;
  } else {
    let message = document.querySelector(`.${opponent.name}.text-center`);
    message.innerHTML = "his  die";
  }
};

// make health

Person.prototype.makehealth = function () {
  if (this.health !== 100) {
    this.health += 10;
  }
  console.log(this.health);
  if (this.health > 100) {
    this.health = 100;
  }

  console.log(this.health);
  this.prograssBtn.style.width = `${this.health}%`;
};

let narutoo = new Person("narutoo", 10, 100, 100);
let sa = new Person("sa", 5, 100, 100);

sa.attackBtn.addEventListener("click", () => {
  sa.attack(narutoo);
});
narutoo.attackBtn.addEventListener("click", () => {
  narutoo.attack(sa);
});

sa.healthBtn.addEventListener("click", () => {
  sa.makehealth();
});
narutoo.healthBtn.addEventListener("click", () => {
  narutoo.makehealth();
});
