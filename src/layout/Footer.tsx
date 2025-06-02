import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='text-white py-1 mt-3' style={{ backgroundColor: '#1e2826'}}>
            <Container className='text-center'>
                문의 및 협박 : <a href='https://github.com/Nobody-IArc' className='text-white' target='_blank' rel='noopener'>
                GitHub 바로가기
            </a><br />
                Copyright ⓒ Profit Company. All Rights Reserved.
                <br />
            </Container>
        </footer>
    );
}

export default Footer;
