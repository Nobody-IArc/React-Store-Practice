import { useState } from 'react';
import CustomCarousel from '../components/Carousel';
import { Container, Row } from 'react-bootstrap';
import GameItem from '../components/GameItem';
import gameData, { type Game } from '../data/Gamedata';

const HomePage = () => {
    const [games, setGame] = useState<Game[]>(gameData);

    return (
        <div>
            <CustomCarousel/>

            <Container>
                <div className='project_header_container'>
                    <h1 className='project_header'>Best Seller</h1>
                    <div className='hr'></div>
                </div>
                <Row className='text-center'>
                    {games.map((game) => {
                        return <GameItem key={game.id} game={game}/>
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;