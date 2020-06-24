import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../store/authReducer';
import {signOut} from '../../store/loginUser';

function Header(props) {
    return (
        <div className="header">
            <h2>React test application</h2>
            {
                props.user?
                <button onClick={props.signOut}>Sign Out</button>:
                null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: getUser(state.authState),
    }
}

function mapDispatchToProps(dispatch){
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

