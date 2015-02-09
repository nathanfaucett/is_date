var isObjectLike = require("is_object_like");


var objectDateStr = "[object Date]",
    objectToString = Object.prototype.toString;


module.exports = function isDate(obj) {
    return (isObjectLike(obj) && objectToString.call(obj) === objectDateStr) || false;
};
