var assert = require("assert"),
    isDate = require("../src/index");


describe("isDate", function() {
    it("should return true when the value is a Date", function() {
        assert.equal(isDate(null), false);
        assert.equal(isDate([]), false);
        assert.equal(isDate({}), false);
        assert.equal(isDate(new Date()), true);
    });
});
