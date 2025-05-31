import * as React from 'react';
import { type Game } from '../data/Gamedata';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface GameItemProps {
    game: Game;
}

const GameItem: React.FC<GameItemProps> = ({ game }) => {
    return(
            <Col sm={6} md={4} key={game.id} className='box p-4'>
                <Card className='border rounded shadow-sm p-3' style={{ height: '500px', width: '300px' }}>
                    <Card.Body>
                        <Card.Img variant='top' src={`/image/${game.id}T.jpg`} style={{ height: '248px', width: '196px', objectFit: 'cover' }} alt={game.name}/>
                        <Card.Title className='name'>
                            {game.name}
                        </Card.Title>
                        <div className='description'>
                            <span className='maker'>제작사: {game.maker}</span>
                            <p></p>
                            <span className='score'>평점: {game.score}</span>
                            <p></p>
                        </div>
                    </Card.Body>
                    <div className='linkTo'>
                        <Link to='/'>
                            <Button variant='primary'>상세 보기</Button>
                        </Link>
                    </div>
                </Card>
            </Col>
    );
}

export default GameItem;