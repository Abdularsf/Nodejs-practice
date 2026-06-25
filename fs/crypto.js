const crypto = require("crypto");

const randmVal = crypto.randomBytes(8).toString("hex");
console.log(randmVal);