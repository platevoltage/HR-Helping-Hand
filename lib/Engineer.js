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



    }



}


module.exports = Engineer;


// engineer(github) {
//     this.github = github;
//     this.role = "Engineer";
//     this.getGithub = function () { return this.github; };
//     this.getRole = function () { return "Engineer"; };

// }