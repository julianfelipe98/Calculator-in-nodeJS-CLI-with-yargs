const yargs = require("yargs");

const opts = {
  base: { demand: true, alias: "b" },
  limit: { alias: "l", default: 10 },
};
const argv = require("yargs")
  .command("list", "Imprime en consola la tabla de multiplicar", opts)
  .command(
    "create",
    "crea el archivo de la tabla de multiplicar en la carpeta del proyecto",
    opts
  ).argv;

  module.exports={
      argv
  }