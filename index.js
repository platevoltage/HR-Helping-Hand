const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
var team = [];

console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Welcome to the HR Helping Hand! We will start with you, the Team Manager\n -- Please enter your name\n");

createManager();
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
            console.log(manager);
            
            // return manager;
            team.push(manager);
            nextEmployeeType();

            
        });      
}

function nextEmployeeType() {
    console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Would you like to add another employee to your team?\n");
    console.log(team);
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
                    createIntern();
                    break;
                }
                case 'Add an Engineer': {
                    createEngineer();
                    break;
                }
                default: {
                    // console.log('restart');
                    buildHTML();
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
            team.push(engineer);
            nextEmployeeType();
            
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
            team.push(intern);
            nextEmployeeType();
            
        });  
}


function buildHTML() {

    console.log(team);
    let innerHTML = [];


    for (let i of team) {
        innerHTML.push(buildCard(i));
    }


    let htmlFile = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
${innerHTML.join('\n')}
</body>
</html>     
    `;

    console.log(htmlFile);
    writeFile(htmlFile);
    
}

function buildCard(teamMember) {
    let card = `
    <div>
        <h2>${teamMember.name}</h2>
        <p>${teamMember.role}</p>
        <p>${teamMember.id}</p>
        <p>${teamMember.email}</p>
    </div>    
    `;



    return card;
}

function writeFile(htmlFile) {
    fs.writeFile("./dist/index.html", htmlFile, (err) => err ? console.log(err) : console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Successfully generated index.html in the 'dist/' directory."));
}