import { Carousel } from 'react-bootstrap';
import '../App.css';

const CustomCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='carousel-item-custom'>
                    <img className='fixed-size-img'
                         src='/image/Zelda_ToK.jpg'
                         alt='Zelda ToK'
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-custom'>
                    <img className='fixed-size-img'
                         src='/image/Zelda_LA.jpg'
                         alt='Zelda LA'
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-custom'>
                    <img className='fixed-size-img'
                         src='/image/Persia_TLC.jpg'
                         alt='Persia TLC'
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;