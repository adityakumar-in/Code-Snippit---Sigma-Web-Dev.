const data = require("./3b. export - Common.js")

console.log(data.a, data.b)
console.log(__dirname)

// You can use export and import using script tag in HTML also
// just mention the export and import file and rest will be taken care of 
// <script src="import.js"> </script>
// <script src="export.js"> </script>


// (function(exports, require, module, __filename, __dirname {
//     // Module code actually lives here
// })
// console.log(__dirname)