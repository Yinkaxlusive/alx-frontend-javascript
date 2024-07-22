import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
console.log(report.allEmployees); // Should output: { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
console.log(report.getNumberOfDepartments()); // Should output: 2

