class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string') {
            throw new Error('name must be a string');
        }
        if (typeof id !== 'number' || id < 0) {
            throw new Error('id must be a number');
        }
        if (typeof email !== 'string' || !(email.includes('@')) || !(email.includes('.'))) {
            throw new Error('email must be a valid email address');
        }


        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        this.getName = function () { return this.name; };
        this.getID = function () { return this.id; };
        this.getEmail = function () { return this.email; };
        this.getRole = function () { return this.role; };

    }


}

module.exports = Employee;