const Intern = require("../lib/Intern");

test("Get name", () => {
  const intern = new Intern("name");

  expect(intern.getInternName());
});

test("Get id", () => {
  const intern = new Intern("id");

  expect(intern.getId());
});

test("Get email", () => {
  const intern = new Intern("email");

  expect(intern.getEmail());
});

test("Get school", () => {
  const intern = new Intern("school");

  expect(intern.getSchool());
});
