
const Employee = require('./Employee');


class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // if (typeof officeNumber !== 'number') {
        //     throw new Error('officeNumber must be a number');
        // }
        // const role = 'manager';

        super(name, id, email);
        this.officeNumber = officeNumber;
     
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.role = "Manager";
        // this.getName = function () { return this.name; };
        // this.getID = function () { return this.id; };
        // this.getEmail = function () { return this.email; };
        // this.getRole = function () { return this.role; };


    }



}


module.exports = Manager;



// manager(officeNumber) {


//     if (typeof officeNumber !== 'number') {
//         throw new Error('officeNumber must be a number');
//     }

//     this.officeNumber = officeNumber;
//     this.role = "Manager";

// }