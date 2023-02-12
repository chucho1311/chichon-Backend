'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('bucaramanga', {
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
    await queryInterface.addConstraint(
        'bucaramanga', //nombre de la tabla
        {
          fields: [],//columnas que tendran esta restriccion
          type: 'unique', //restriccion para que los valores sean unicos
          name: '' //nombre para guardar el cambio
        }
      )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('bucaramanga');

  }
};
