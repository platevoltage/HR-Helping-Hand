
const Employee = require('./Employee');


class Intern extends Employee {

    constructor(name, id, email, school) {
        // if (typeof officeNumber !== 'number') {
        //     throw new Error('officeNumber must be a number');
        // }
        

        super(name, id, email);
        this.school = school;
     
        this.role = "Intern";



    }



}


module.exports = Intern;


// intern(school) {
//     this.school = school;
//     this.getSchool = function () { return this.school; };
//     this.getRole = function () { return "Intern"; };

// }