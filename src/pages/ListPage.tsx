import axios from 'axios';
import { useEffect, useState } from 'react';
import gameData from '../data/Gamedata';
import { Container, Row } from 'react-bootstrap';
import GameItem from '../components/GameItem';

const ListPage = () => {
    const [games, setGames] = useState(gameData);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            axios.get('https://jamsuham75.github.io/image/data2.json')
                .then((result) => {
                    console.log(result.data);
                    console.log(games);

                    const copy = [...games, ...result.data];
                    setGames(copy);
                    console.log(copy);
                    setLoaded(true);
                })
                .catch(() => {
                    console.log('Error');
                })
        }
    }, [loaded, games]);

    return (
        <div>
            <Container>
                <div className='project_header_container'>
                    <h1 className='project_header'>게임 리스트</h1>
                    <div className='hr'></div>
                </div>
                <div>
                    <Row className='text-center'>
                        {games.map((item, i) => (
                            <GameItem key={i} game={item}></GameItem>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ListPage;