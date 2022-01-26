const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
var team = [];

console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Welcome to the HR Helping Hand! We will start with you, the Team Manager\n -- Please enter your name\n");

team.push(createManager());
// nextEmployeeType();
// console.log(manager);
function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "<Name>",
                name: "name"
            },{
                type: "input",
                message: "<Employee ID>",
                name: "id"
            },{
                type: "input",
                message: "<Email address>",
                name: "email"
            },{
                type: "input",
                message: "<Office Number>",
                name: "office"
            },


        ])
        .then((response) => {
            // console.log(response);
            const manager = new Manager(response.name, parseInt(response.id), response.email, parseInt(response.office));
            // console.log(manager);
            // return manager;
            nextEmployeeType();
            return manager;
        });      
}

function nextEmployeeType() {
    console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Would you like to add another employee to your team?\n");
    inquirer
        .prompt([
            {
                type: 'list',
                message: '-',
                name: 'nextEmployee',
                choices: ['Add an Intern', 'Add an Engineer', 'not at this time'],
            }
        ])
        .then((response) => {
            console.log(response.nextEmployee);
            switch (response.nextEmployee) {
                case 'Add an Intern': {
                    team.push(createIntern());
                    break;
                }
                case 'Add an Engineer': {
                    team.push(createEngineer());
                    break;
                }
                default: {
                    console.log('restart');
                }
                
            }
          
        });
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "<Name>",
                name: "name"
            },{
                type: "input",
                message: "<Employee ID>",
                name: "id"
            },{
                type: "input",
                message: "<Email address>",
                name: "email"
            },{
                type: "input",
                message: "<GitHub username>",
                name: "github"
            },


        ])
        .then((response) => {
            // console.log(response);
            const engineer = new Engineer(response.name, parseInt(response.id), response.email, response.github);
            // console.log(manager);
            // return manager;
            nextEmployeeType();
            return engineer;
        });  
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "<Name>",
                name: "name"
            },{
                type: "input",
                message: "<Employee ID>",
                name: "id"
            },{
                type: "input",
                message: "<Email address>",
                name: "email"
            },{
                type: "input",
                message: "<School>",
                name: "school"
            },


        ])
        .then((response) => {
            // console.log(response);
            const intern = new Intern(response.name, parseInt(response.id), response.email, response.school);
            // console.log(manager);
            // return manager;
            nextEmployeeType();
            return intern;
        });  
}