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
    .then(({ choice }) => {
      if (choice === "Manager") {
        Manager.prototype.getManagerName();
      }
      if (choice === "Engineer") {
        Engineer.prototype.getEngineerName();
      }
      if (choice === "Intern") {
        Intern.prototype.getInternName();
      }
    });
};

module.exports = Employee;
