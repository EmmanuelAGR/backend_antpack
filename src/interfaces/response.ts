export interface IResponse {
  /** @param { number } code Represents HTTP response code.  */
  code: number;

  /** @param { unknown } data Represents the response from the server. [Optional]  */
  data?: unknown;

  /** @param { unknown } data Represents the response message. [Optional] */
  msg?: string;

  /** @param { unknown } data Represents the response error. [Optional] */
  error?: unknown;
}
