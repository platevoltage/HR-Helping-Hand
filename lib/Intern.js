
const Employee = require('./Employee');


class Intern extends Employee {

    constructor(name, id, email, school) {
        if (typeof school !== 'string') {
            throw new Error('school must be a string');
        }
        

        super(name, id, email);
        this.school = school;
     
        this.role = "Intern";
        this.getSchool = function () { return this.school };
        this.icon = '<i class="bi bi-mortarboard"></i>';
        this.customTrait = `<span>School: </span>${this.school}`;


        }



    



}


module.exports = Intern;


// intern(school) {
//     this.school = school;
//     this.getSchool = function () { return this.school; };
//     this.getRole = function () { return "Intern"; };

// }