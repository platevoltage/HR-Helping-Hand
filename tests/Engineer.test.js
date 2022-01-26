const Engineer = require("../lib/Engineer");

describe("Engineer" , () => {
    describe("Initialization", () => {
        it("should cause role to return Engineer and github to return octocat", () => {
            const manager = new Engineer("Jonathan", 126, "johndoe@email.com", "octocat");

            expect(manager.role).toEqual("Engineer");
            expect(manager.github).toEqual("octocat");
        });
        it("should throw an error if provided no github", () => {
            const cb = () => new Engineer("Jonathan", 126, "johndoe@email.com");

            expect(cb).toThrow();
        });

    });
    describe("getRole", () => {
        it("getRole should return Engineer", () => {
            const manager = new Engineer("Jonathan", 126, "johndoe@email.com", "octocat");

            expect(manager.getRole()).toEqual("Engineer");
        });
    });
    
});
