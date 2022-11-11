/**
 * HTTP Codes available
 */
export enum StatusCode {
  /** @param { number } OK Represents the http code 200.  */
  OK = 200,

  /** @param { number } BAD_REQUEST Represents HTTP code 400.  */
  BAD_REQUEST = 400,

  /** @param { number } UNAUTHORIZED Represents HTTP code 401.  */
  UNAUTHORIZED = 401,

  /** @param { number } FORBIDDEN Represents HTTP code 403.  */
  FORBIDDEN = 403,

  /** @param { number } NOT_FOUND Represents HTTP code 404.  */
  NOT_FOUND = 404,

  /** @param { number } INTERNAL_SERVER_ERROR Represents HTTP code 500.  */
  INTERNAL_SERVER_ERROR = 500,
}
