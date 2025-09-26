const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expense', {
    expense_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'groupinfo',
        key: 'group_id'
      }
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'expense',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expense_pkey",
        unique: true,
        fields: [
          { name: "expense_id" },
        ]
      },
    ]
  });
};
