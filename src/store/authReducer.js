import { AUTH_SUCCESS, AUTH_FAIL, SIGN_OUT } from './actionTypes';
import {loadState} from './localStorage';
const initialState = {
    user: loadState(),
    authError: null
}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case AUTH_SUCCESS:
        return { 
            ...state,
            user: action.payload,
            authError: null
        };
      case SIGN_OUT: {
          return {
            ...state,
            user: null,
            authError: null
          }
      }
      case AUTH_FAIL:
        return { 
            ...state,
            user: null,
            authError: action.payload 
        };
      default:
        return state;
    }
  };
  
  export const getUser = state => state.user;
  export const getAuthError = state => state.authError;