import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getUser} from '../../store/authReducer';
import { Redirect } from 'react-router-dom';

//check auth with redux
const WithUser = (Component) => props => {
    if(props.user){
        return <Component {...props}/>;
    }  
    else{ //redirect to login page
        return <Redirect to='/login' />;
    } 

}

function mapStateToProps(state) {
    return {
        user: getUser(state.authState),

    }
}

const composedWithUser = compose(
    connect(mapStateToProps,null),
    WithUser
)

export default composedWithUser;