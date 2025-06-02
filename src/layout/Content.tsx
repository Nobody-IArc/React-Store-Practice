import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ListPage from '../pages/ListPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

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
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/list' element={<ListPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </div>
    );
};
export default Content;