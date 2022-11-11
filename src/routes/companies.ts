import { Router } from 'express';

import { check } from 'express-validator';

import { checkErrors } from '../middlewares';
import {
  deleteCompany,
  getCompany,
  getCompanies,
  postCompany,
  putCompany,
} from '../controllers/companies';

const router = Router();

router
  .get('/', getCompanies)         // [api/companies]
  .get('/:id', getCompany)        // [api/companies/:{id}]
  .post(                          // [api/companies]
    '/',
    [
      check(
        ['name', 'catchPhrase', 'bs'],
        'The following field is required'
      ).notEmpty(),
      checkErrors,
    ],
    postCompany
  )
  .put('/:id', putCompany)        // [api/companies/:{id}]
  .delete('/:id', deleteCompany); // [api/companies/:{id}]

export default router;
