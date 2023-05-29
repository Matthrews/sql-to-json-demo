const queryStr = "SELECT type, MAX(age), COUNT(id) FROM kv.user WHERE id BETWEEN '03' AND '10' GROUP BY type ORDER BY MAX(age) DESC";

// https://g14n.info/SQL92-JSON/
var sql2json = require("sql92-json").parse;
var retStr = sql2json(queryStr);
console.log("JSON Result: ", JSON.stringify(retStr, null, 2));
