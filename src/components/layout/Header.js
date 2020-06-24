import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../store/authReducer';
import {signOut} from '../../store/loginUser';

import Button from 'react-bootstrap/Button';

function Header(props) {
    return (
        <div className="header">
            <h5>React test application</h5>
            {
                props.user?
                <Button  size="sm" variant="warning" onClick={props.signOut}>Sign Out</Button>:
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

