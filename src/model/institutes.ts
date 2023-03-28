import { DataTypes, Model } from "sequelize"
import { seq } from "./db"

export class Institute extends Model {
  declare id: string
  declare name: string
}
Institute.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  { sequelize: seq },
)
