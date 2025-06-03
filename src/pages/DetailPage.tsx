// import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { type Game } from '../data/Gamedata';
import { useLocation, useNavigate } from 'react-router-dom';
import { addItem } from '../data/store';
import { useDispatch } from 'react-redux';

interface LocationState {
    game: Game;
}

const DetailPage = () => {
    // const { id } = useParams<{ id: string }>();
    // console.log(id);
    const location = useLocation();
    const { state } = location as { state: LocationState };
    const game = state?.game;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(game);
    // console.log(state);

    // 팝업 부분 - 지원이 종료된 함수 사용으로 인해 대안 찾기

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
                                        dispatch(addItem({ id: game.id, name: game.name, price: game.price }));
                                        navigate('/cart');
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