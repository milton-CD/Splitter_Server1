var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _expense = require("./expense");
var _expensepayments = require("./expensepayments");
var _expensesplit = require("./expensesplit");
var _groupinfo = require("./groupinfo");
var _groupmember = require("./groupmember");
var _tests = require("./tests");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var expense = _expense(sequelize, DataTypes);
  var expensepayments = _expensepayments(sequelize, DataTypes);
  var expensesplit = _expensesplit(sequelize, DataTypes);
  var groupinfo = _groupinfo(sequelize, DataTypes);
  var groupmember = _groupmember(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  expense.belongsToMany(users, { as: 'user_id_users', through: expensepayments, foreignKey: "expense_id", otherKey: "user_id" });
  expense.belongsToMany(users, { as: 'user_id_users_expensesplits', through: expensesplit, foreignKey: "expense_id", otherKey: "user_id" });
  users.belongsToMany(expense, { as: 'expense_id_expenses', through: expensepayments, foreignKey: "user_id", otherKey: "expense_id" });
  users.belongsToMany(expense, { as: 'expense_id_expense_expensesplits', through: expensesplit, foreignKey: "user_id", otherKey: "expense_id" });
  expensepayments.belongsTo(expense, { as: "expense", foreignKey: "expense_id"});
  expense.hasMany(expensepayments, { as: "expensepayments", foreignKey: "expense_id"});
  expensesplit.belongsTo(expense, { as: "expense", foreignKey: "expense_id"});
  expense.hasMany(expensesplit, { as: "expensesplits", foreignKey: "expense_id"});
  expense.belongsTo(groupinfo, { as: "group", foreignKey: "group_id"});
  groupinfo.hasMany(expense, { as: "expenses", foreignKey: "group_id"});
  groupmember.belongsTo(groupinfo, { as: "group", foreignKey: "group_id"});
  groupinfo.hasMany(groupmember, { as: "groupmembers", foreignKey: "group_id"});
  expensepayments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(expensepayments, { as: "expensepayments", foreignKey: "user_id"});
  expensesplit.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(expensesplit, { as: "expensesplits", foreignKey: "user_id"});
  groupmember.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(groupmember, { as: "groupmembers", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    expense,
    expensepayments,
    expensesplit,
    groupinfo,
    groupmember,
    tests,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
