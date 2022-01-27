const Employee = require('./Employee');


class Engineer extends Employee {

    constructor(name, id, email, github) {
        if (typeof github !== 'string') {
            throw new Error('github must be a string');
        }
        

        super(name, id, email);
        this.github = github;
     
        this.role = "Engineer";
        this.getGithub = function () { return this.github };
        this.icon = '<i class="bi bi-gear-wide-connected"></i>';
        this.customTrait = `<span>GitHub username: </span><a href="https://github.com/${this.github}/" target="_blank" rel="noopener noreferrer">${this.github}</a>`;  

    }



}


module.exports = Engineer;


// engineer(github) {
//     this.github = github;
//     this.role = "Engineer";
//     this.getGithub = function () { return this.github; };
//     this.getRole = function () { return "Engineer"; };

// }