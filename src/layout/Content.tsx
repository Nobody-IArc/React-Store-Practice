import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ListPage from '../pages/ListPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { PersonArmsUp, Basket3 } from 'react-bootstrap-icons';

// import DetailPage2 from '../pages/DetailPage2';

const Content = () => {

    return (
        <div>
            <Navbar style={{ backgroundColor: '#A17BE0' }} data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='/'><h1>Game Store</h1></Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/list'>Game</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/login' className='d-flex align-items-center'>
                            <PersonArmsUp size={24} className='me-2' />Login
                        </Nav.Link>
                        <Nav.Link href='/cart' className='d-flex align-items-center'>
                            <Basket3 size={24} className='me-2' />Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/list' element={<ListPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
                {/*<Route path='/detail/:id' element={<DetailPage2 />} />*/}
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={'NOT FOUND'} />
            </Routes>
        </div>
    );
};
export default Content;