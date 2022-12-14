import React from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
// import { ClassList } from 'react-classlist';

import Button from '~/components/Button';
import './Carousel.css';
import { DataCarousel, DataCarouselImage } from '~/Data/Carousel/Carousel';

const cx = classNames.bind(styles);

function Carousel() {
    const [carousels, setCarousels] = useState([]);
    const [images, setImages] = useState([]);
    const [scroll, setScroll] = useState(false);

    // const app = new ClassList('container whitebg');
    // const handleScroll = () => {
    //     // console.log(window.scrollY);
    //     if (window.scrollY > 99) {
    //         // app.add('app-scroll');
    //         setScroll(true);
    //     } else {
    //         // app.remove('app-scroll');
    //         setScroll(false);
    //     }
    // };

    // window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        setTimeout(() => {
            setCarousels(DataCarousel);
        }, 0);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setImages(DataCarouselImage);
        }, 0);
    }, []);

    const settings = {
        dots: true,
        Number: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <div className={scroll ? 'App app-scroll' : 'App'} id="app">
            <div>
                <Slider {...settings}>
                    {carousels.map((carousel) => (
                        <div className={cx('cart')} key={carousel.id}>
                            <div className={cx('cart-top')}>
                                <img src={carousel.linkImg} alt={carousel.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={cx('box')}>
                <div className={cx('box-img')}>
                    {images.map((img) => (
                        <div className={cx('img')} key={img.id}>
                            <Button>
                                <img src={img.linkImg} alt="" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
