// import Parser for all databases
const { Parser } = require('node-sql-parser');
const parser = new Parser();

const queryStr = "SELECT type, MAX(age), COUNT(id) FROM kv.user WHERE id BETWEEN '03' AND '10' GROUP BY type ORDER BY MAX(age) DESC";
const ast = parser.astify(queryStr); // mysql sql grammer parsed by default

console.log(JSON.stringify(ast, null, 2));