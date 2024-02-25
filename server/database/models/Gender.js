module.exports = (sequelize, DataTypes) => {
    const Genders = sequelize.define("Genders", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
    }, {
        tableName: "genders",
    });

    // Relación con la tabla Applicants
    Genders.associate = (models) => {
        Genders.hasMany(models.Applicants, { 
            as:"applicants",
            onDelete: 'CASCADE',  
            foreignKey: 'gender_id'
         });
    }
    return Genders;
};
