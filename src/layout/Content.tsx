import { Navbar, Container, Nav } from 'react-bootstrap';
import CustomCarousel from '../components/Carousel';

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
            <CustomCarousel />
            </div>
            );
            }
export default Content;