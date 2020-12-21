const { argv } = require("./config/yargs");
const { createFile, multiply } = require("./models/multiply");
const colors = require("colors");

let command = argv._[0];

switch (command) {
  case "list":
    console.log("listar");
    console.log(multiply(argv.base, argv.limit).brightRed);
    break;
  case "create":
    console.log("create");
    createFile(argv.base, argv.limit)
      .then((file) => console.log(`Archivo ${file} creado `.green))
      .catch((err) => console.log(err));
    break;

  default:
    console.log("comando no reconocido");
    break;
}
