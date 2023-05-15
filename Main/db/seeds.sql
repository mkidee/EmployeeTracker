INSERT INTO department (department_id)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales"),
        ("Advertising");

INSERT INTO employee_role (title, salary, department_id)
VALUES  ("Lead Engineer", 135000, 1),
        ("Software Engineer", 100000, 1),
        ("Account Manager", 110000, 2),
        ("Accountant", 88000, 2),
        ("Legal Team Lead", 175000, 3),
        ("Lawyer", 125000, 3),
        ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Advertising Lead", 125000, 5),
        ("Advertising Team", 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Brandon", "Breivik", 1, NULL),
        ("Mckay", "Memmott", 2, 1),
        ("Kylie", "Fromm", 2, 1),
        ("Ryan", "Stott", 3, NULL),
        ("Austin", "Stott", 4, 4),
        ("Mason", "Stott", 4, 4),
        ("Madi", "Mansion", 5, NULL),
        ("Henry", "Wright", 6, 7),
        ("Benji", "Wright", 6, 7),
        ("Hugh", "Memmott", 7, NULL),
        ("Cash", "Money", 8, 10),
        ("Jeremy", "Lin", 8, 10),
        ("Marissa", "Memmott", 9, NULL),
        ("Taylor", "Tikam", 10, 13),
        ("Gina", "Dawg", 10, 13);


