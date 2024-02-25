module.exports = (sequelize, DataTypes) => {
    const Applicants = sequelize.define("Applicants", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        url_linkedin: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, 
    {
        tableName: "applicants",
    });

    // Relación con la tabla User
    Applicants.associate = (models) => {
        Applicants.belongsTo(models.Genders, { 
            as:"genders",
            onDelete: 'CASCADE',  
            foreignKey: 'gender_id'
         })

         Applicants.belongsToMany(models.Proffesions, {
            as: 'professions',
            through: 'applicants_proffesions',
            foreignKey: 'applicants_id',
            otherKey: 'proffesions_id',
            timestamps: false
         })
    }
    return Applicants;
};
