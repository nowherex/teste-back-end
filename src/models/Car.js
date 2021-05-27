const { Model, DataTypes } = require('sequelize')

class Car extends Model {
    static init(sequelize) {
        super.init({
            plate: DataTypes.STRING,
            color: DataTypes.STRING,
            model: DataTypes.STRING,
            year: DataTypes.STRING,
            daily: DataTypes.STRING,
        },
            {
                sequelize
            })
    }

    static associate(models) {
        this.hasMany(models.Rent, { foreignKey: 'car_id', as: 'cars'})
    }
}


module.exports = Car