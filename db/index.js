const MySqlconnection = require('../connections');

class DB {
    constructor() {
        this.connection = MySqlconnection;
    }
    viewAllDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM DEPARTMENT'
        );
    }
    viewAllRoles() {
        return this.connection.promise().query(
            'SELECT * FROM empRole'
        );
    }
    viewAllEmployees() {
        return this.connection.promise().query(
            'SELECT * FROM EMPLOYEE'
        );
    }
    addDepartment(DEPARTMENT) {
        return this.connection.promise().query(
            'INSERT INTO DEPARTMENT SET ?', DEPARTMENT
        );
    }
    addRole(empRole) {
        return this.connection.promise().query(
            'INSERT INTO empROLE SET ?', empRole
        );
    }
    addEmployee(EMPLOYEE) {
        return this.connection.promise().query(
            'INSERT INTO EMPLOYEE SET ?', EMPLOYEE
        );
    }
    updateEmployeeRole(EMPLOYEEid, empRoleID) {
        return this.connection.promise().query(
            'UPDATE EMPLOYEE SET ROLE_ID = ? WHERE ID = ?', [empRoleID, EMPLOYEEid]
        );
    }
    // ends the connection
    endConnection() {
        this.connection.end();
    }
}
module.exports = new DB();