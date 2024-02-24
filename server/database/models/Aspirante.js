module.exports = (sequelize, DataTypes) => {
    const Aspirante = sequelize.define("Aspirante", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        dni: {
            type: DataTypes.STRING,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        genero: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        email: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        urlLinkedin: {
            type: DataTypes.STRING,
        },
        imagen: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        // content: {
        //     type: DataTypes.TEXT,
        // }
    }, {
        tableName: "aspirante",
        timestamps: false,
    });

    // Relación con la tabla User
    Aspirante.associate = (models) => {
        // Aspirante.belongsTo(models.User, { foreignKey: 'cartId' });
        Aspirante.belongsToMany(models.Profesiones, { 
            through: "aspirante_profesion",
            as:"profesiones",
            onDelete: 'CASCADE',  
            foreignKey: 'aspirante_id'
         });
    }
    return Aspirante;
};
