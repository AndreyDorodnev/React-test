import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser,getAuthError} from '../../store/authReducer';
import {signIn} from '../../store/loginUser';
import {withRouter} from 'react-router-dom';

function Login(props) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.signIn(username,password);
    }

    useEffect(()=>{
        if(props.user){
            props.history.push('/');
        }
    },[props.user])

    return (
        <form onSubmit={onFormSubmit}>
            <h3>Sign in form</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" required placeholder="username" value={username} onChange={(event)=>setUsername(event.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" required placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}></input>
            </div>
            {
                props.error? 
                <p className="error-msg">{props.error}</p>:
                null
            }
            <button type="submit">Sign In</button>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        user: getUser(state.authState),
        error: getAuthError(state.authState),
    }
}

function mapDispatchToProps(dispatch){
    return {
        signIn: (name,password) => dispatch(signIn(name,password)),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));



