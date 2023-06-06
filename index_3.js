const parser = require('js-sql-parser');

const queryStr = "SELECT type, MAX(age), COUNT(id) FROM kv.user WHERE id BETWEEN '03' AND '10' GROUP BY type ORDER BY MAX(age) DESC";
const ast = parser.parse(queryStr);

console.log(JSON.stringify(ast, null, 2));