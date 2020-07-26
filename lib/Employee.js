const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Employee() {
  this.name = name;
  this.id = id;
  this.email = email;
}

Employee.prototype.getName = function () {
  inquirer
    .prompt({
      type: "text",
      name: "name",
      message: "Please enter a name",
    })
    .then(({ name }) => {
      this.name = new Employee(name);
    });
};

module.exports = Employee;
