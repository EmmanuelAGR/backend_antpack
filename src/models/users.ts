import { DataTypes, Model } from 'sequelize';

import db from '../db/connection';
import { IUser } from '../interfaces/user';
import CompanyModel from './company';

const UsersModel = () => {
  const model = db().define<Model<IUser>>('users', {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_company: {
      type: DataTypes.UUIDV4,
    },
    website: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  });

  model.hasOne(CompanyModel(), {
    as: 'company',
    foreignKey: 'id',
    sourceKey: 'id_company',
  });

  return model;
};

export default UsersModel;
