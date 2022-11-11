import { Response, NextFunction, Request } from 'express';

import { validationResult } from 'express-validator';

import { IResponse } from '../interfaces/response';
import { StatusCode } from '../enum/statusCode';
import HandleResponse from '../helpers/handleResponse';

/**
 * Get the errors returned by the "express-validator" library to parse.
 * @param {Request} req Represents the client's request.
 * @param {Response<IResponse>} res Represents the response from the server.
 * @param {NextFunction} next Next middleware
 * @returns {Response<IResponse, Record<string, any>> | undefined} HandleResponse()
 */
const checkErrors = (
  req: Request,
  res: Response<IResponse>,
  next: NextFunction
): Response<IResponse, Record<string, any>> | undefined => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return HandleResponse(res, {
        code: StatusCode.BAD_REQUEST,
        error: errors.array().map(error => `${error?.msg}: ${error.param}`),
      });

    next();
  } catch (error) {
    return HandleResponse(res);
  }
};

export default checkErrors;
