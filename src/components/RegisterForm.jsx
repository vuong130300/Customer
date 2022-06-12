import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

RegisterForm.propTypes = {
    onRegisterSubmit: PropTypes.func.isRequired,
};

function RegisterForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const { onRegisterSubmit } = props

    function handleRegisterSubmit(e) {
        e.preventDefault()

        onRegisterSubmit({email,password,name,phone,address})
    }
    return (

        <>
            <Form  onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default RegisterForm;