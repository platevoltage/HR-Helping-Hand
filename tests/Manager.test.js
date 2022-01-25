const { is } = require("@babel/types");
const Employee = require("../index");

describe("Employee" , () => {
    describe("Initialization", () => {
        it("should cause getRole to return Manager", () => {
            const employee = new Employee("Jonathan", 126, "johndoe@email.com");
            employee.manager(123);
            expect(employee.getRole()).toEqual("Manager");
        });
        it("should cause .officeNumber to equal input", () => {
            const employee = new Employee("Jonathan", 126, "johndoe@email.com");
            employee.manager(123);
            expect(employee.officeNumber).toEqual(123);
        });
        it("should throw an error if no argument", () => {
            const employee = new Employee("Jonathan", 126, "johndoe@email.com");
            employee.manager();
            expect(employee).toThrow();
        });
    });

    
})