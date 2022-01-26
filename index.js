const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");


console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Welcome to the HR Helping Hand! We will start with you, the Team Manager\n -- Please enter your name\n");

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
        console.log(response);
    });