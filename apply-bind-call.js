const computer = {
  mouse: "A4Tech",
  keyboard: ["logitech", 500],
  motherBoard: ["Asus", 8000],
  processor: ["intel", 10000],
  ram: "4gb",
  hardDisk: "1TB",

  totalCost(tax) {
    const cost = this.motherBoard[1] + this.processor[1];
    return cost + cost * (tax / 100);
  },
};

const laptop = {
  motherBoard: ["Gigabyte", 5000],
  processor: ["AMD", 8000],
};

const invoice = computer.totalCost.bind(laptop, 10); // store in a variable
console.log(invoice()); // And call the function
// console.log(computer.totalCost.call(laptop, 10)); // call = comma
// console.log(computer.totalCost.apply(laptop, [10])); // apply = array
