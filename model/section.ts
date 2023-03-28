import {DataTypes, Model} from "sequelize";
import {seq} from "./institutes";

class Section extends Model{}

Section.init({id: {type: DataTypes.STRING, primaryKey: true}, coridor: DataTypes.ARRAY},{sequelize: seq})

Section.sync()