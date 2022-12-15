import { v4 as uuid } from 'uuid';

export interface IUser {
  id: any | typeof uuid;
  name: string;
  email:string;
  phone:string;
}

export interface IParams {
  id: any;
}

export interface IState {
  users: IUser[];
}

export interface IAction {
  type: string;
  payload: any;
}

export enum ActionTypes {
  REMOVE_USER = 'REMOVE_USER',
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
}
