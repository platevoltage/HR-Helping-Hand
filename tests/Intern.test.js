const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should cause school to return Starfleet Academy and role to return Intern", () => {

            const intern = new Intern("Jonathan", 126, "johndoe@email.com", "Starfleet Academy");
            expect(intern.school).toEqual("Starfleet Academy");
            expect(intern.role).toEqual("Intern");


        });
    });
    describe("getRole", () => {
        it("getRole should return Intern", () => {
            const manager = new Intern("Jonathan", 126, "johndoe@email.com", "Starfleet Academy");

            expect(manager.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("getSchool should return Starfleet Academy", () => {
            const manager = new Intern("Jonathan", 126, "johndoe@email.com", "Starfleet Academy");

            expect(manager.getSchool()).toEqual("Starfleet Academy");
        });
    });
});