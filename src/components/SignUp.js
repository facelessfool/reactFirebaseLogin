import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import React from 'react'

const signUp = () => {
    return (
        <div>
        <h2>Sign up!</h2>
            <Form>
                
                <Form.Group controlId="suEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Confirm email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="suPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
                <Button onClick={()=>(alert("sign up"))} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default signUp;