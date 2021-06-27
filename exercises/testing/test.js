// write some tests
const { fixId } = require("./users");
describe("users", () => {
	it("fixId should work fine", () => {
		expect(fixId("100")).toBe(100);
	});
});
