var tape = require("tape"),
    isDate = require("..");


tape("isDate(value) should return true when the value is a Date", function(assert) {
    assert.equal(isDate(null), false);
    assert.equal(isDate([]), false);
    assert.equal(isDate({}), false);
    assert.equal(isDate(new Date()), true);
    assert.end();
});
