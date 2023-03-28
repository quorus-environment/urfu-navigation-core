import {DataTypes, Model, Sequelize} from "sequelize";

export const seq = new Sequelize('urfu','postgres','p123p123p123',{host:'194.67.103.130', dialect:'postgres'})

class Institute extends Model {}
Institute.init({
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING
}, {sequelize: seq})

Institute.sync()