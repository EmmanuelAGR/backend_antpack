import { Request, Response } from 'express';

import { StatusCode } from '../enum/statusCode';
import CompanyModel from '../models/company';
import UsersModel from '../models/users';
import HandleResponse from '../helpers/handleResponse';

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const { rows, count } = await CompanyModel().findAndCountAll();

    return HandleResponse(res, {
      code: StatusCode.OK,
      data: { companies: rows, count },
    });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const getCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const company = await CompanyModel().findByPk(id);

    if (!company)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no company with the id: ${id}.`,
      });

    return HandleResponse(res, { code: StatusCode.OK, data: company });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const postCompany = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const existsName = await CompanyModel().findOne({
      where: {
        name: body.name,
      },
    });

    if (existsName)
      return HandleResponse(res, {
        code: StatusCode.BAD_REQUEST,
        msg: `There is a company with the name: ${body.name}.`,
      });

    const company = CompanyModel().build(body);
    await company.save();

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: 'Company created successfully.',
    });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const putCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      body: { name, catchPhrase, bs },
    } = req;

    const company = await CompanyModel().findByPk(id);

    if (!company)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no company with the id: ${id}.`,
      });

    if (name) {
      if (name !== company.get().name) {
        const existName = await CompanyModel().findOne({
          where: {
            name,
          },
        });

        if (existName)
          return HandleResponse(res, {
            code: StatusCode.BAD_REQUEST,
            msg: `There is a company with the name: ${name}.`,
          });
      }
    }

    await company.update({ name, catchPhrase, bs });

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: 'Company updated successfully.',
    });
  } catch (error) {
    return HandleResponse(res);
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const company = await CompanyModel().findByPk(id);

    if (!company)
      return HandleResponse(res, {
        code: StatusCode.NOT_FOUND,
        msg: `There is no company with the id: ${id}.`,
      });

    const userIncludesCompany = await UsersModel().findOne({
      where: {
        $id_company$: id,
      },
    });

    await company.destroy();

    return HandleResponse(res, {
      code: StatusCode.OK,
      msg: userIncludesCompany
        ? 'This company has been removed, including its stored users'
        : 'Company deleted successfully.',
    });
  } catch (error) {
    return HandleResponse(res);
  }
};
