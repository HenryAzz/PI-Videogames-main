

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 sequelize.define('videogame', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
     

    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    platform: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    img: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    release: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      foreingKey: true,
    },
    ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })


};


