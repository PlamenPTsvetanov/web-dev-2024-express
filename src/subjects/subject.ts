import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface SubjectAttributes {
  id: number;
  name: string;
  lector: string;
}

interface SubjectCreationAttributes extends Optional<SubjectAttributes, 'id'> {}

export class Subject extends Model<SubjectAttributes, SubjectCreationAttributes> implements SubjectAttributes {
  public id!: number;
  public name!: string;
  public lector!: string;
}

export const SubjectModel = (sequelize: Sequelize) => {
  Subject.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      lector: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    },
    {
      sequelize,
      tableName: 'subjects',
    }
  );

  return Subject;
};
