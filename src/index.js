var isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString;


module.exports = isDate;


function isDate(obj) {
    return (
        isObjectLike(obj) &&
        objectToString.call(obj) === "[object Date]"
    ) || false;
}
