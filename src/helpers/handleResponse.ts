import { Response } from 'express';

import { IResponse } from '../interfaces/response';
import { StatusCode } from '../enum/statusCode';

/**
 * Handles the response from the server.
 * @param { Response } res Represents the response from the server.
 * @param { IResponse } obj Represents the data to be inserted into the response
 * @returns { Response<IResponse> } response
 */
const HandleResponse = (
  res: Response<IResponse>,
  obj?: IResponse
): Response<IResponse> => {
  const { code = 0, data, msg, error } = obj || {};

  switch (code) {
    case StatusCode.OK:
      return res.status(code).json({
        code,
        data,
        msg: msg || 'OK',
      });

    case StatusCode.BAD_REQUEST:
      return res.status(code).json({
        code,
        msg: msg || 'Bad Request.',
        error,
      });

    case StatusCode.UNAUTHORIZED:
      return res.status(code).json({
        code,
        msg: msg || 'Unathorized.',
        error,
      });

    case StatusCode.FORBIDDEN:
      return res.status(code).json({
        code,
        msg: msg || 'Forbidden.',
        error,
      });

    case StatusCode.NOT_FOUND:
      return res.status(code).json({
        code,
        msg: msg || 'Not Found.',
        error,
      });

    default:
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        code: StatusCode.INTERNAL_SERVER_ERROR,
        msg: 'Internal Server Error.',
        error,
      });
  }
};

export default HandleResponse;
