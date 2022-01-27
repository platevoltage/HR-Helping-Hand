const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const { func } = require("assert-plus");

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
            // console.log(manager);
            
            // return manager;
            team.push(manager);
            nextEmployeeType();

            
        });      
}

function nextEmployeeType() {
    console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Would you like to add another employee to your team?\n");
    // console.log(team);
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

    // console.log(team);
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</head>
<body>
<header><h1>${team[0].name}'s Team</h1></header>
${innerHTML.join('\n')}
</body>
</html>     
    `;

  
    writeFile(htmlFile);
    copyStyleSheet();
    
}

function buildCard(teamMember) {

    const customTraits = {
        'Manager' : {
            'icon' : '<i class="bi bi-megaphone"></i>',
            'trait' : `<span>Office #: </span>${teamMember.officeNumber}`  
            },
        'Engineer' : {
            'icon' : '<i class="bi bi-gear-wide-connected"></i>',
            'trait' : `<span>GitHub username: </span><a href="https://github.com/${teamMember.github}/" target="_blank" rel="noopener noreferrer">${teamMember.github}</a>`  
            },
        'Intern' : {
            'icon' : '<i class="bi bi-mortarboard"></i>',
            'trait' : `<span>School: </span>${teamMember.school}` 
            }
    }




    let card = `
    <div class="card">
        <div class="title invisible">
            <h2>${teamMember.name}</h2>
            <h3>${teamMember.role}</h3>
        </div>

        <div class="contents">
            
            <div class="invisible info">
                <p><span>Employee ID: </span>${teamMember.id}</p>
                <p><span>E-Mail: </span><a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                <p>${customTraits[teamMember.role].trait}</p>
            </div> 
            <div class="invisible icon">
                ${customTraits[teamMember.role].icon}
            </div>      
        </div>
    </div>  
    
    `;
    return card;
}

function writeFile(htmlFile) {
    fs.writeFile("./dist/index.html", htmlFile, (err) => err ? console.log(err) : console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Successfully generated index.html in the 'dist/' directory."));
}

function copyStyleSheet() {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => err ? console.log(err) : console.log("\x1b[1m\x1b[32m%s\x1b[0m", "\n -- Successfully copied style.css in the 'dist/' directory."));
}
