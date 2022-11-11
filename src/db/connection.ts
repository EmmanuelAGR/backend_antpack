import { Sequelize } from 'sequelize';

const db = (): Sequelize =>{
  return new Sequelize(
    process.env.DB || '',
    process.env.USERDB || '',
    process.env.PASSWORD || '',
    {
      host: process.env.HOST || '',
      dialect: 'mysql',
      logging: false,
    }
  );
}

export default db;
