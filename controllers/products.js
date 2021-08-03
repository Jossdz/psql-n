const knex = require("../config/knex");

exports.createProduct = async (req, res) => {
  res.send("createProduct");
};
exports.getAllProducts = async (req, res) => {
  const allProds = await console.log(allProds);
  res.send("getAllProducts");
};
exports.getSingleProduct = async (req, res) => {
  res.send("getSingleProduct");
};
exports.updateProduct = async (req, res) => {
  res.send("updateProduct");
};
exports.deleteProducts = async (req, res) => {
  res.send("deleteProducts");
};
