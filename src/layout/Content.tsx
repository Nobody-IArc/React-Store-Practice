import { Navbar, Container, Nav, Col, Row, Card, Button } from 'react-bootstrap';
import CustomCarousel from '../components/Carousel';
import gameData, { type Game } from '../data/Gamedata';
import { useState } from 'react';
import GameItem from '../components/GameItem';

const Content = () => {
    const [games, setGame] = useState<Game[]>(gameData);
    console.log(games);

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
            <CustomCarousel/>

            <Container>
                <div className='project_header_container'>
                    <h1 className='project_header'>Best Seller</h1>
                    <div className='hr'></div>
                </div>
                <Row className='text-center'>
                    {games.map((game) => {
                        return <GameItem key={game.id} game={game} />
                    })}
                </Row>
            </Container>
        </div>
    );
};
export default Content;