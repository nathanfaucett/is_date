var isObject = require("@nathanfaucett/is_object");


var objectToString = Object.prototype.toString;


module.exports = isDate;


function isDate(value) {
    return (
        isObject(value) &&
        objectToString.call(value) === "[object Date]"
    ) || false;
}
