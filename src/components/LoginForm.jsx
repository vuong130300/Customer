import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

LoginForm.propTypes = {
    onLoginSubmit: PropTypes.func.isRequired
};

function LoginForm(props) {
    const { onLoginSubmit } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLoginSubmit(e) {
        e.preventDefault()
        const formvalues = {
            email,
            password
        }
        onLoginSubmit(formvalues)
    }

    return (
        <>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Link to="/register">Chưa có tài khoản</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Xác nhận
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;