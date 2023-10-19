import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { ListOfNews } from '../shared/ListOfNews';
export default function FilmsPresentation() {
    return (

        <Container className='mt-5 mb-5'>
            <p className='fs-1 mt-5'>Hot News</p>
            <div className='row'>
                {ListOfNews.map((news) => (
                    <div className='col-md-4'>
                        <Card sx={{ maxWidth: 345, }} className='mt-5'>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src={news.image}
                                    alt="image"
                                />
                                <CardContent >
                                    <Tooltip title={news.title} arrow>
                                        <Typography gutterBottom variant="h5" component="div" className='ellipsis'>
                                            {news.title}
                                        </Typography>
                                    </Tooltip>
                                    <Typography gutterBottom variant="h7" component="div" className='ellipsis'>
                                        {news.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}

            </div>
        </Container>
    );

}
