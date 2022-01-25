const Employee = require("../index");

describe("Employee" , () => {
    describe("Initialization", () => {
        it("should create an instance of Employee with name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Jonathan", 126, "johndoe@email.com");

            expect(employee.name).toEqual("Jonathan");
            expect(employee.id).toEqual(126);
            expect(employee.email).toEqual("johndoe@email.com");
        });
    });



})