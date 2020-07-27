const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Employee() {
  this.role;
}

Employee.prototype.getRole = function () {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Would you like to add a Manager, an Engineer, or an Intern?",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then(({ role }) => {
      this.role = new Employee(role);
    });
};

module.exports = Employee;
