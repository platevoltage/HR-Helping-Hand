//Employee class

function Employee(name, id, email) {
    if (typeof name !== 'string') {
        throw new Error('name must be a string');
    }
    if (typeof id !== 'number') {
        throw new Error('id must be a number');
    }
    if (typeof email !== 'string' || !(email.includes('@')) || !(email.includes('.'))) {
        throw new Error('email must be a valid email address');
    }
    

    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function() { return this.name; };
    this.getID = function() { return this.id; };
    this.getEmail = function() { return this.email; };
    this.getRole = function() { return "Employee" };

}


//manager prototype

Employee.prototype.manager = function(officeNumber) {
    this.officeNumber = officeNumber;
    this.getRole = function() { return "Manager" };

} 

//engineer prototype
Employee.prototype.engineer = function(github) {
    this.github = github;
    this.getGithub = function() { return this.github; };
    this.getRole = function() { return "Engineer" };
    
} 

//intern prototype

Employee.prototype.intern = function(school) {
    this.school = school;
    this.getSchool = function() { return this.school };
    this.getRole = function() { return "Intern" };
    
} 


module.exports = Employee;