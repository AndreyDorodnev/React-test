import { AUTH_SUCCESS, AUTH_FAIL, SIGN_OUT } from './actionTypes';
import {clearState,saveState} from './localStorage';

export function signIn(userName,password) {
    return dispatch => {    
        //some hardcoded login check
        if(userName!=='admin'||password!=='1234'){
            dispatch({type: AUTH_FAIL,payload: 'wrong name or password!'});
        }
        else {
            saveState({userName:userName,password:password});
            dispatch({type: AUTH_SUCCESS,payload: {userName,password}});
        }
    }
}

export function signOut(){
    return dispatch => {
        clearState();
        dispatch({type:SIGN_OUT});
    }
}