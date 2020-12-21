
const yargs = require("yargs");

const opts = {
  base: { demand: true, alias: "b" },
  limit: { alias: "l", default: 10 },
};
const argv = require("yargs")
  .command("list", "show in the console the multiplication table", opts)
  .command(
    "create",
    "make the multiplication file in the tables folder",
    opts
  ).argv;

  module.exports={
      argv
  }