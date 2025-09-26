const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupinfo', {
    group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    group_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'groupinfo',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "groupinfo_pkey",
        unique: true,
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
