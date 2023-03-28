import { DataTypes, Model } from "sequelize"
import { seq } from "../db"

export class Section extends Model {}

Section.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    coridor: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
  },
  { sequelize: seq },
)

Section.sync()
