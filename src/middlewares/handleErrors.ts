import { Response, NextFunction, Request } from 'express';

import { IResponse } from '../interfaces/response';
import { StatusCode } from '../enum/statusCode';
import HandleResponse from '../helpers/handleResponse';

/**
 * Class that handles errors
 */
class HandleErrors {
  constructor() {}

  /**
   * Show server error in console.
   * @param {any} err Error to display.
   * @param {NextFunction} next Next middleware.
   */
  logErrors(err: any, _: Request, __: Response, next: NextFunction) {
    console.error({ Log_Error: err.stack });
    next(err);
  }

  /**
   * Error handler for requests made with XHR.
   * @param {any} err Error to handle.
   * @param {Request} req Represents the client's request.
   * @param {Response} res Represents the response from the server.
   * @param {NextFunction} next Next middleware.
   * @returns {Response<IResponse, Record<string, any>> | undefined} HandleResponse()
   */
  clientErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response<IResponse, Record<string, any>> | undefined {
    if (req.xhr) {
      return HandleResponse(res, { code: StatusCode.INTERNAL_SERVER_ERROR });
    } else next(err);
  }

  /**
   * Handle internal server errors.
   * @param {any} err Error to handle.
   * @param {Response} res Represents the response from the server.
   * @returns {Response<IResponse, Record<string, any>> | undefined} HandleResponse()
   */
  errorHandler(
    err: any,
    _: Request,
    res: Response,
    __: NextFunction
  ): Response<IResponse, Record<string, any>> | undefined {
    if (err) return HandleResponse(res, { code: err.statusCode });
  }
}

export default HandleErrors;
