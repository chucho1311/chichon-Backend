const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bucaramanga', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bucaramanga',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bucaramanga_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
