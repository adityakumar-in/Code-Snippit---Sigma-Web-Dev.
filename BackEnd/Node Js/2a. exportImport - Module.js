// To enable module you have to specify type: "module" in package.json file

// Importing Named export
// import {a, b, c} from "./export - Module.js";
// console.log(a); 

// Importing Default export - can be imported with any name [doesn't have to be same name as exported one]
import obj from "./export - Module.js"
console.log(obj.x, obj.y);

// You can use export and import using script tag in HTML also
// just mention the export and import file and rest will be taken care of 
// <script type="module" src="import.js"> </script>
// <script type="module" src="export.js"> </script>


// (function(exports, require, module, __filename, __dirname {
//     // Module code actually lives here
// })
// console.log(__dirname)