const Employee = require("../lib/Employee");

describe("Employee" , () => {
    describe("Initialization", () => {
        it("should create an instance of Employee with name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Jonathan", 126, "johndoe@email.com");

            expect(employee.name).toEqual("Jonathan");
            expect(employee.id).toEqual(126);
            expect(employee.email).toEqual("johndoe@email.com");
        });
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });
        it("should throw an error if provided no age", () => {
            const employee = () => new Employee("Jonathan");

            expect(employee).toThrow();
        });
        it("should throw an error if provided no email", () => {
            const employee = () => new Employee("Jonathan", 126);

            expect(employee).toThrow();
        });
        it("should throw an error age is not a number", () => {
            const employee = () => new Employee("Jonathan", "126", "johndoe@email.com");

            expect(employee).toThrow();
        });
        it("should throw an error age is not a positive number", () => {
            const employee = () => new Employee("Jonathan", -2 , "johndoe@email.com");

            expect(employee).toThrow();
        });
        it("should throw an error if email isnt valid format", () => {
            const employee = () => new Employee("Jonathan", 126, "johndoe&email,com");

            expect(employee).toThrow();
        });
    });
    describe("getRole", () => {

        const employee = new Employee("Jonathan", 126, "johndoe@email.com");

        expect(employee.getRole()).toEqual("Employee");

    });



})