import { DataTypes, Model, Sequelize, Optional, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationsMixin } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  universityId: number;
  email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public universityId!: number;
  public email!: string;

  declare getSubjects: BelongsToManyGetAssociationsMixin<User>;
  declare addSubjects: BelongsToManyAddAssociationsMixin<User, object>;
}

export const UserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      universityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  );

  return User;
};