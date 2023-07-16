// dependencies
const inquirer = require("inquirer");
const connections = require('../config/connections');
const consTab = require('console.table');

// creating arrays that will hold all of the data:
let departments = [];
let roles = [];
let employees = [];
let managers = [];