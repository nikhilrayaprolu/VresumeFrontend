import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { ActionReducer, Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as user from '../actions/user';
export const CHANGE = 'CHANGE';
export interface State {
  username:string;
}

/**
 * There is always a need of initial state to be passed onto the store.
 *
 * @prop: query: ''
 * @prop: loading: false
 */
const initialState: State = {
  username:''
};
export function reducer(state:State = initialState,action:user.Actions): State {
  switch (action.type){
    case user.ActionTypes.CHANGE:{
      const username=action.payload;
      return Object.assign({},state,{
        username
      });
    }
    default: {
      return state;
    }
  }
}
export const getUserName = (state: State) => state.username;
