module.exports = (sequelize, DataTypes) => {
    const Professions = sequelize.define("Professions", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(64),
            allowNull: false
        }
    },
    {
        tableName: "professions",
        timestamps: false,
    });
    
    Professions.associate = (models) => {
        Professions.belongsToMany(models.Applicants, { 
            as:"applicants",
            through: "applicants_professions",
            onDelete: 'CASCADE', 
            foreignKey: 'professions_id',
            otherKey: 'applicants_id',
            timestamps: false,
         });

    }
    return Professions;
}