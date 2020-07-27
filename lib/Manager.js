const inquirer = require("inquirer");
const Employee = require("./Employee");

function Manager() {
  this.position;
  this.name;
  this.id;
  this.email;
  this.officeNumber;
}

Manager.prototype.startQuestions = function () {
  this.position = new Employee(role);
  this.getName();
};

Manager.prototype.getName = function () {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "What is the Manager's name?",
    })

    .then(({ name }) => {
      this.name = new Manager(name);
      this.getId();
    });
};

Manager.prototype.getId = function () {
  inquirer
    .prompt({
      type: "input",
      name: "id",
      message: "What is the Manager's ID number?",
    })

    .then(({ id }) => {
      this.id = new Manager(id);
      this.getEmail();
    });
};

Manager.prototype.getEmail = function () {
  inquirer
    .prompt({
      type: "input",
      name: "email",
      message: "What is the Manager's email?",
    })

    .then(({ email }) => {
      this.email = new Manager(email);
      this.getOfficeNumber();
    });
};

Manager.prototype.getOfficeNumber = function () {
  inquirer
    .prompt({
      type: "input",
      name: "officenumber",
      message: "What is the Manager's office number?",
    })

    .then(({ officeNumber }) => {
      this.officeNumber = new Manager(officeNumber);
    });
};

module.exports = Manager;
