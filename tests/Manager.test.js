
// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager" , () => {
    describe("Initialization", () => {
        it("should cause name to return Jonathan", () => {
            const manager = new Manager("Jonathan", 126, "johndoe@email.com", 123);

            expect(manager.role).toEqual("Manager");
            expect(manager.officeNumber).toEqual(123);
        });

    });
    
});
