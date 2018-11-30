"use strict";

const fs      = require("fs");
const jwt     = require("jsonwebtoken");

const privateKey = fs.readFileSync("./private/AuthKey.p8").toString();
const teamId     = "8CJ88HX34H";
const keyId      = "4NCGJC335A";

const jwtToken = jwt.sign({}, privateKey, {
    algorithm: "ES256",
    expiresIn: "180d",
    issuer: teamId,
    header: {
        alg: "ES256",
        kid: keyId
    }
});

console.log(jwtToken);