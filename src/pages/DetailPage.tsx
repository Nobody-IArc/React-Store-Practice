import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { type Game } from '../data/Gamedata';
import { useLocation } from 'react-router-dom';

interface LocationState {
    game: Game;
}

const DetailPage = () => {
    // const { id } = useParams<{ id: string }>();
    // console.log(id);
    const location = useLocation();
    const { state } = location as { state: LocationState };
    const game = state?.game;
    // console.log(game);
    // console.log(state);
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col md={6}>
                        <Card className='border-0'>
                            <Card.Img
                                variant='top'
                                src={'/image/' + game.id + '.jpg'}
                                style={{ borderRadius: '8px' }}
                            />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='border-0 text-center'>
                            <Card.Body>
                                <Card.Title as='h3' className='mb-4'>{game.name}</Card.Title>
                                <Card.Text className='text-muted mb-4'>설명: {game.desc}</Card.Text>
                                <Card.Text as='h4' className='text-primary mb-4'>가격: {game.price} ₩</Card.Text>
                                <Button
                                    variant='primary'
                                    onClick={() => {
                                        console.log('딸깍');
                                    }}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailPage;