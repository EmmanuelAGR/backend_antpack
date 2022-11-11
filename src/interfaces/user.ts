import { Json } from 'sequelize/types/utils';

export interface IUser {
  id?:        string;
  name:       string;
  username:   string;
  email:      string;
  address:    Json;
  phone:      string;
  id_company: string;
  website?:   string;
  img?:       string;
}
