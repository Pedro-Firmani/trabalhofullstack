const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa',
        {
          id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
          nome: {type: DataTypes.STRING, allowNull: false},
          cpf: {type: DataTypes.STRING, allowNull: false},
          telefone: {type: DataTypes.STRING, allowNull: false},
        },
        { tableName: 'pessoas' }
    )
    return Pessoa
}
