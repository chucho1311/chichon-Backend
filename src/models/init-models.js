var DataTypes = require("sequelize").DataTypes;
var _comments = require("./comments");
var _post_media = require("./post_media");
var _posts = require("./posts");
var _users = require("./users");

function initModels(sequelize) {
  var comments = _comments(sequelize, DataTypes);
  var post_media = _post_media(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comments.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  post_media.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(post_media, { as: "post_media", foreignKey: "post_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});

  return {
    comments,
    post_media,
    posts,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
