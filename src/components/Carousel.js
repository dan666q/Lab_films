// CarouselComponent.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Films } from '../shared/ListOfFilm';
import '../styles/slick-custom.css'; // Import the CSS file
import axios from 'axios';

const Carousel = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    function getData() {
        const res = axios.get(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films`)
            .then(function (response) {
                setFilms(response.data)
            }).catch(function (error) {
                console.log(error);
            });
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4, // Number of cards shown at once
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='ps-5 pe-5'>
            <Slider {...settings}>
                {films.map((film) => (
                    <Card sx={{ maxWidth: '80%', }} className='mt-5'>
                        <CardActionArea >
                            <Link to={`/${film.id}`} style={{ textDecoration: 'none', color: "inherit" }}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    src={film.Image}
                                    alt="film"
                                />
                            </Link>
                        </CardActionArea>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
