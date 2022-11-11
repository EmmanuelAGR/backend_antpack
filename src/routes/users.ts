import { Router } from 'express';

import { check } from 'express-validator';

import { checkErrors } from '../middlewares';
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from '../controllers/users';

const router = Router();

router
  .get('/', getUsers)          // [api/users]
  .get('/:id', getUser)        // [api/users/:{id}]
  .post(                       // [api/users]
    '/',
    [
      check(
        ['name', 'username', 'email', 'address', 'phone', 'id_company'],
        'The following field is required'
      ).notEmpty(),
      checkErrors,
    ],
    postUser
  )
  .put('/:id', putUser)        // [api/users/:{id}]
  .delete('/:id', deleteUser); // [api/users/:{id}]

export default router;
