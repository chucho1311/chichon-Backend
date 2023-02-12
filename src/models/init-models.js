var DataTypes = require("sequelize").DataTypes;
var _bucaramanga = require("./bucaramanga");
var _florida = require("./florida");
var _giron = require("./giron");
var _users = require("./users");

function initModels(sequelize) {
  var bucaramanga = _bucaramanga(sequelize, DataTypes);
  var florida = _florida(sequelize, DataTypes);
  var giron = _giron(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    bucaramanga,
    florida,
    giron,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
