const { TestResult } = require("@jest/types");
const { exportAllDeclaration } = require("@babel/types");

test("create a name for the Employee", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
});
