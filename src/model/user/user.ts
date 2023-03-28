import { Model, DataTypes } from "sequelize"
import { seq } from "../db"

export class User extends Model {
  declare id: string
  declare username: string
  declare email: string
  declare password: string
  declare ip: string[]
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    ip: { type: DataTypes.ARRAY(DataTypes.STRING) },
  },
  { sequelize: seq },
)
