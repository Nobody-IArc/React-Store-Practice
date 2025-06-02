import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((el) => observer.observe(el));
    }, []);
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='header_left hidden'>
                    <div>
                        <img src='/image/member.jpg' width={'70%'} alt='대표 이미지' />
                    </div>

                    <div>
                        <header>Real Company 대표, Harvard University Professor</header>
                        <header>안녕하세요,</header>
                        <header>접니다.</header>
                        <div>
                            <span>예 나에요!</span><br />
                            <span>나라니까요?</span><br />
                            <span>예 갑니다...</span>
                        </div>
                        <div>
                            <a href='https://github.com/Nobody-IArc?tab=stars'>
                                <button className='btn_header btnHover'>Github</button>
                            </a>
                            <a href='https://velog.io/@nomad98657/posts'>
                                <button className='btn_header btnHover'>블로그</button>
                            </a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutPage;