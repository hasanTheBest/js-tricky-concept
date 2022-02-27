// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4.

// ========== 1. Implicit binding =========
// Rule: look function/method calling place and detect immediate obj/property
// before dot

// 1.1 example - simple/plain object
const company = {
  name: "Google",
  service: "Search website",
  description: function () {
    console.log(`${this.name} is the number one ${this.service} in the world`);
  },
};
// console.log(company.description());

// 1.2 example - object as arguments
const company2 = function (obj) {
  obj.description = function () {
    console.log(`${this.name} is renowned for building ${this.service}`);
  };
  return obj;
};
const paramObj = {
  name: "Tesla",
  service: "Space Rocket",
};
// console.log(company2(paramObj).description());

// 1.3 example - constructing object
const companyConstruct = function (name, service) {
  return {
    name,
    service,
    description: function () {
      console.log(
        `${this.name} is the number one ${this.service} in the world`
      );
    },
  };
};
// console.log(companyConstruct("Facebook", "Social Media Website").description());

// 1.4 example - nested object
const companyInfo = function (name, service) {
  return {
    name,
    service,
    developerOf: {
      name: "React",
      framework: "JavaScript",
      description: function () {
        // how to access companyInfo.name and companyInfo.service here
        console.log(
          `${this.name} is the number one ${this.framework} for the frontend development.`
        );
      },
    },
    description: function () {
      console.log(
        `${this.name} is the number one ${this.service} in the world`
      );
    },
  };
};
const facebook = companyInfo("Facebook", "Social Media");
// console.log(facebook.developerOf.description());

// ========= 2. Explicit or Direct binding ===========
function sing(work, country) {
  console.log(
    `${this.name} is singing ${this.song}. He is a ${work} and lives in ${country}`
  );
}
const singer = {
  name: "Vubon Da",
  song: "Kacha Badam",
};
const bindToCall = sing.bind(singer, "Peanut seller", "India");
// console.log(sing.call(singer, "Peanut seller", "India")); // call = comma separated args
// console.log(sing.apply(singer, ["Peanut seller", "India"])); // apply = array args
// console.log(bindToCall()); // store in var and need to call

// ========== 3. new binding ==============
function IceCreamSeller(name, country) {
  // let this = Object.create(null) // first new keyword create object named this
  this.name = name;
  this.country = country;
  this.showProfession = function () {
    console.log(`${this.name} selling Ice Cream in ${this.country}.`);
  };
  // return this object // And finally return the obj
}
const artugul = new IceCreamSeller("Artugul", "Turkey");
// console.log(artugul.showProfession());

// ============= 4. Window binding =================
// Rule: if any of the above rule is not followed then it follows default window binding
// "use strict"; // will produce an error rather printing window/global
function printName() {
  // console.log(this); // window or global
  console.log(this.name);
}
const person = {
  name: "mahmud",
};

printName();
