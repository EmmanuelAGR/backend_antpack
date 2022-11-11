import { Application } from 'express';

import UsersRouter from './users';
import CompanyRouter from './companies';

const routes = (app: Application) => {
  app.use('/api/users', UsersRouter);
  app.use('/api/companies', CompanyRouter);
};

export default routes;
