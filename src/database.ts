import { DataTypes, Sequelize } from 'sequelize';
import { User, UserModel } from './user/user';
import { UniversityModel } from './university/university';
import { Subject, SubjectModel } from './subjects/subject';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // SQLite database file path
});

export const db = {
    sequelize,
    Sequelize,
    models: {
        User: UserModel(sequelize),
        University: UniversityModel(sequelize),
        Subject: SubjectModel(sequelize)
    },
};

const User_Subjects = sequelize.define('User_Subjects', {
    userId: { 
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    subjectId: {
      type: DataTypes.INTEGER,
      references: {
        model: Subject,
        key: 'id',
      },
    },
  });
  

db.models.User.belongsTo(db.models.University, {
    foreignKey: 'universityId',
    as: 'university',
});

db.models.University.hasMany(db.models.User, {
    foreignKey: 'universityId',
    as: 'users',
});


db.models.User.belongsToMany(db.models.Subject, {
    through: User_Subjects,
    as: 'UserSubject',
    foreignKey: 'subjectId',
    otherKey: 'userId'
  });
  
  db.models.Subject.belongsToMany(db.models.User, {
    through: User_Subjects,
    as: 'UserSubject',
    foreignKey: 'userId',
    otherKey: 'subjectId'
  });
  