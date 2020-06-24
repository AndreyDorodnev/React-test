import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser,getAuthError} from '../../store/authReducer';
import {signIn} from '../../store/loginUser';
import {withRouter} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" required placeholder="Enter username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} />
            </Form.Group>
            {
                props.error? 
                <Form.Group>
                    <Form.Text className="text-danger">
                    {props.error}
                    </Form.Text>
                </Form.Group>
                :
                null
            }
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
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



