// dependencies
const inquirer = require("inquirer");
const connections = require('../config/connections');
const consTab = require('console.table');

// creating arrays that will hold all of the data:
let departments = [];
let roles = [];
let employees = [];
let managers = [];

// success message that is uni
function logSuccess(Operations, msg) {
    if (Operations !== "Quit" || "View All Departments" || "View All Roles" || "View All Employees" || "View Employees by Manager" || "View Employees by Department") {
        console.log( `----------------- Operation "${Operations}" was completed successfully. -----------------\n`);
        console.log(`\n${msg}`);
        console.log( `----------------- Operation "${Operations}" was completed successfully. -----------------\n\n`);
    }
}

// fill the selection arrays from the database
function fillSelectionArrays() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        const uniqueDepartments = new Set(res.map(item => item.department_name));
        departmentSelection = [...uniqueDepartments];
    });

    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        const uniqueRoles = new Set(res.map(item => item.role_title));
        roleSelection = [...uniqueRoles];
    });

    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        const uniqueEmployees = new Set(res.map(item => item.first_name + " " + item.last_name));
        employeeSelection = [...uniqueEmployees];
    });

    connection.query("SELECT * FROM employee WHERE manager_id IS NULL", function (err, res) {
        if (err) throw err;
        const uniqueManagers = new Set(res.map(item => item.first_name + " " + item.last_name));
        managerSelection = [...uniqueManagers];
    });
}