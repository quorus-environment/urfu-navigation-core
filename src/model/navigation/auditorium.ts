import { DataTypes, Model } from "sequelize"
import { seq } from "../db"

export class Auditorium extends Model {
  declare id: string
  declare title: string
  declare destination: string
  declare coordinates: [number, number][]
}
Auditorium.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING,
      defaultValue: "auditorium",
    },
    coordinates: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
    },
  },
  { sequelize: seq, modelName: "auditorium", freezeTableName: true },
)

Auditorium.sync()
