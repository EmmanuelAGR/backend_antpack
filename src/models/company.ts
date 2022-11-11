import { DataTypes, Model } from 'sequelize';

import db from '../db/connection';
import { ICompany } from '../interfaces/company';

const CompanyModel = () => {
  const model = db().define<Model<ICompany>>('companies', {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    catchPhrase: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return model;
};

export default CompanyModel;
