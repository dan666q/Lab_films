import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box, Tooltip, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Films } from '../shared/ListOfFilm';
import Carousel from './Carousel';
import { useState } from 'react';
import axios from 'axios';

export default function FilmsPresentation() {
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
    const [sortBy, setSortBy] = useState(null);
    const sortedFilms = [...films].sort((a, b) => {
        if (sortBy === "name") {
            return a.Title.localeCompare(b.Title);
        } else if (sortBy === "year") {
            return a.Year - b.Year;
        } else {
            return 0; // No sorting
        }
    });

    return (
        <Container>
            <Carousel />
            <p className='fs-2 mt-5'>List Of Films</p>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <MenuItem value="name">Sort by Name</MenuItem>
                    <MenuItem value="year">Sort by Year</MenuItem>
                </Select>
            </FormControl>
            <div className='row'>
                {sortedFilms.map((film) => (
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card sx={{ maxWidth: 250, }} className='mt-5'>
                                <CardActionArea >
                                    <Link to={`/${film.id}`} style={{ textDecoration: 'none', color: "inherit" }}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            src={film.Image}
                                            alt="film"
                                        />
                                        <CardContent >
                                            <Tooltip title={film.Title} arrow>
                                                <Typography gutterBottom variant="h6" component="div" className='ellipsis'>
                                                    {film.Title}
                                                </Typography>
                                            </Tooltip>
                                            <Typography gutterBottom variant="h7" component="div" className='ellipsis'>
                                                {film.Year}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Container>
                    </div>
                ))}
            </div>
        </Container>
    );

}
