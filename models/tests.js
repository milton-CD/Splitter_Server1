const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tests',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tests_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
