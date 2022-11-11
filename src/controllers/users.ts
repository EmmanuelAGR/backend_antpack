import { Request, Response } from 'express';
import { Op } from 'sequelize';

import UsersModel from '../models/users';
import CompanyModel from '../models/company';
import { StatusCode } from '../enum/statusCode';
import HandleResponse from '../helpers/handleResponse';
import gravatar from '../helpers/gravatar';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const {
      search = '',
      page: p,
      limit: l,
    } = req.query as Record<string, string>;

    const page = p ? parseInt(p) : 1;
    const limit = l ? parseInt(l) : 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await UsersModel().findAndCountAll({
      include: ['company'],
      where: {
        email: {
          [Op.like]: `${search}%`,
        },
      },
      offset,
      limit,
    });

    return HandleResponse(res, {
      code: StatusCode.OK,
      data: { users: rows, page, count },
    });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UsersModel().findByPk(id);

    if (!user)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no user with the id: ${id}.`,
      });

    return HandleResponse(res, { code: StatusCode.OK, data: user });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const existUser = await UsersModel().findOne({
      where: {
        [Op.or]: [{ username: body.username }, { email: body.email }],
      },
    });

    if (existUser)
      return HandleResponse(res, {
        code: StatusCode.BAD_REQUEST,
        msg: `The username or email already exists.`,
      });

    const existCompany = await CompanyModel().findByPk(body?.id_company);

    if (!existCompany)
      return HandleResponse(res, {
        code: StatusCode.BAD_REQUEST,
        msg: `There is no company with the id: ${body?.id_company}.`,
      });

    const user = UsersModel().build({ ...body, img: gravatar(body?.email) });
    await user.save();

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: 'User created successfully.',
    });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const putUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      body: { name, username, phone, website, id_company },
    } = req;

    const user = await UsersModel().findByPk(id);

    if (!user)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no user with the id: ${id}.`,
      });

    if (username) {
      if (username !== user.get().username) {
        const existUsername = await UsersModel().findOne({
          where: {
            username,
          },
        });

        if (existUsername)
          return HandleResponse(res, {
            code: StatusCode.BAD_REQUEST,
            msg: `There is a user with the username: ${username}.`,
          });
      }
    }

    if (id_company?.length >= 0) {
      const existCompany = await CompanyModel().findByPk(id_company);

      if (!existCompany)
        return HandleResponse(res, {
          code: StatusCode.BAD_REQUEST,
          msg: `There is no company with the id: ${id_company}.`,
        });
    }

    await user.update({ name, username, phone, website, id_company });

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: 'User updated successfully.',
    });
  } catch (error) {
    console.log(error);
    return HandleResponse(res);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UsersModel().findByPk(id);

    if (!user)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no user with the id: ${id}.`,
      });

    await user.destroy();

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: 'User deleted successfully.',
    });
  } catch (error) {
    return HandleResponse(res);
  }
};
