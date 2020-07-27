const inquirer = require("inquirer");

function Engineer() {
  this.name;
  this.id;
  this.email;
  this.github;
}

Engineer.prototype.getName = function () {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    })

    .then(({ name }) => {
      this.name = new Engineer(name);
      this.getId();
    });
};

Engineer.prototype.getId = function () {
  inquirer
    .prompt({
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
    })

    .then(({ id }) => {
      this.id = new Engineer(id);
      this.getEmail();
    });
};

Engineer.prototype.getEmail = function () {
  inquirer
    .prompt({
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    })

    .then(({ email }) => {
      this.email = new Engineer(email);
    });
};

Engineer.prototype.getGithub = function () {
  inquirer
    .prompt({
      type: "input",
      name: "github",
      message: "What is the engineer's github?",
    })

    .then(({ github }) => {
      this.github = new Engineer(github);
    });
};

module.exports = Engineer;
