import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='login-box p-4' style={{ border: '1px solid #cee3db', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '600px', backgroundColor: '#ffffff' }}>
                <h2 className='text-center'>로그인</h2>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label className='text-start w-100'>ID</Form.Label>
                        <Form.Control type='email' placeholder='ID' />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword' className='mt-3'>
                        <Form.Label className='text-start w-100'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Form.Group controlId='formBasicCheckbox' className='mt-3'>
                        <Form.Check type='checkbox' label='Auto Login' className='text-start' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='w-100 mt-3' style={{ height: '60px'}}>Login</Button>

                    <Row className='mt-3 text-center'>
                        <Col>
                            <Link to='/register'>Join</Link>
                        </Col>
                        <Col>
                            <Link to='/find-account'>Find Account</Link>
                        </Col>
                        <Col>
                            <Link to='/find-password'>Find Password</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};

export default LoginPage;