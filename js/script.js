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
  if (this.health !== 100) { // condition for make sure
    this.health += 10; // health plus 10
  }
  console.log(this.health);
  if (this.health > 100) { //health conition for make sure if heath not be more than  110%
    this.health = 100; 
  }


  this.prograssBtn.style.width = `${this.health}%`; // ui display the health
};
// object form the contructor function 
let narutoo = new Person("narutoo", 10, 100, 100);
let sa = new Person("sa", 5, 100, 100);
// attack btn for sa
sa.attackBtn.addEventListener("click", () => {
  sa.attack(narutoo);
});
// attack btn for narutoo 
narutoo.attackBtn.addEventListener("click", () => {
  narutoo.attack(sa);
});
// health btn for sa
sa.healthBtn.addEventListener("click", () => {
  sa.makehealth();
});
//health btn for narutoo
narutoo.healthBtn.addEventListener("click", () => {
  narutoo.makehealth();
});
