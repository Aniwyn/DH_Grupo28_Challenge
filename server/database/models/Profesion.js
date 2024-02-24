module.exports = (sequelize, DataTypes) => {
    const Profesion = sequelize.define("Profesiones", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        deletedAt:{
            type: DataTypes.DATE,
        },
            // aspirante_id:{
            //     type: DataTypes.BIGINT,
            //     foreignKey: true,
            //     unique: true,
            // }
    },
    {
        tableName: "profesion",
        timestamps: false,
    });
    
    Profesion.associate = (models) => {
        Profesion.belongsToMany(models.Aspirante, { 
            through: "aspirante_profesion",
            as:"aspirantes",
            onDelete: 'CASCADE', 
            foreignKey: 'profesion_id' 
         });

    }
    return Profesion;
}