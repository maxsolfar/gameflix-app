const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating:{
      type:DataTypes.DECIMAL(4,2),
      allowNull: true,
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    background_image: {
      type: DataTypes.TEXT,  
      allowNull: true,  
      validate: { isUrl: true }  
    },
    createdGame: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{timestamps: false});
};
