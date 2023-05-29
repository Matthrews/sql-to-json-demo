const queryStr = "SELECT type, age, id FROM kv.user WHERE id BETWEEN '03' AND '10' GROUP BY type";

// https://github.com/florajs/sql-parser
const { Parser } = require('@florajs/sql-parser');
const parser = new Parser();
const ast = parser.parse(queryStr);

console.log('AST Result: ', ast);