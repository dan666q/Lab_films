import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box } from '@mui/material';

export default function ModalCase({ setIsOpen, film }) {
    return (

        <div className='Modal-show' onClick={() => setIsOpen(false)}>
            <div className='modal' id="modal1" style={{ display: 'block', top: '15%' }}>
                <Card   sx={{ maxWidth: 650, }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            height="400"
                            src={film.Trailer}
                            alt="Trailer"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </div>


        </div>
    )
}
