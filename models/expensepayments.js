const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensepayments', {
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
    paid_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ispaid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expensepayments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expensepayments_pkey",
        unique: true,
        fields: [
          { name: "expense_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
