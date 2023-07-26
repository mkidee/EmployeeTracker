// dependencies:
const { default: inquirer } = require('inquirer');
const inquier = require('inquirer');

// user prompts to edit data in the db:
const Uprompts = [
    {
        type:'list',
        name:'Uchoice',
        message:'How can I help you?',
        choices: [
            "View",
            "Add",
            "Delete",
            "Update",
            "Exit"
        ]
    }
];

function Operations() {
    fillSelections();

    inquirer.prompt(Uprompts).then(data => {

    })
}