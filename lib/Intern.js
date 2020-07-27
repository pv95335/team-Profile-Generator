const inquirer = require("inquirer");

function Intern() {
  this.name;
  this.id;
  this.email;
  this.school;
}

Intern.prototype.getName = function () {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    })

    .then(({ name }) => {
      this.name = new Intern(name);
      this.getId();
    });
};

Intern.prototype.getId = function () {
  inquirer
    .prompt({
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
    })

    .then(({ id }) => {
      this.id = new Intern(id);
      this.getEmail();
    });
};

Intern.prototype.getEmail = function () {
  inquirer
    .prompt({
      type: "input",
      name: "school",
      message: "What is the intern's email?",
    })

    .then(({ email }) => {
      this.email = new Intern(email);
    });
};

Intern.prototype.getSchool = function () {
  inquirer
    .prompt({
      type: "input",
      name: "email",
      message: "What is the intern's school?",
    })

    .then(({ school }) => {
      this.school = new Intern(school);
    });
};

module.exports = Intern;
