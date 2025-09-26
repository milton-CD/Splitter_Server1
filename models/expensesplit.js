const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensesplit', {
    expense_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'expense',
        key: 'expense_id'
      }
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    owesamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expensesplit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expensesplit_pkey",
        unique: true,
        fields: [
          { name: "expense_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
