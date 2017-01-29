import { Action } from '@ngrx/store';
import { type } from '../utils';
export const ActionTypes = {
  CHANGE: type('[User] Change')
}
export class UserAction implements Action {
  type = ActionTypes.CHANGE;
  constructor(public payload:string){}
}
export type Actions
  = UserAction
