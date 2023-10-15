import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Films } from '../shared/ListOfFilm';
export default function FilmsPresentation() {
    return (
        <Container className='mt-5 mb-5'>
            <p className='fs-1 mt-5'>List Of Films</p>
            <div className='row'>
                {Films.map((film) => (
                    <div className='col-md-3'>
                        <Card sx={{ maxWidth: 250, }} className='mt-5'>
                            <CardMedia
                                component="img"
                                height="400"
                                src={film.Image}
                                alt="player"
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
                                {/* <Typography variant="body2" color="text.secondary" >
                            {player.info}
                            </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Link to={`Detail/${film.id}`}>
                                    <Button size="small" color="primary">
                                        Detail
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>
                ))}

            </div>
        </Container>
    );

}
