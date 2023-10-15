import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, CardActionArea, CardActions, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Films } from '../shared/ListOfFilm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    // const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container className=' mb-5' sx={{ textAlign: 'justify' }}>
            <div className='row mt-5'>
                <div className='col-md-4'><img className='img-fluid images' src={`../${film.Image}`} /></div>
                <div className='col-md-8 justify'>
                    <p className='fs-1'>{film.Title}</p>
                    <p className='fs-4'>Nation: {film.Nation}</p>
                    <p className='fs-4'>Year: {film.Year}</p>
                    <p className='fs-5'>{film.Info}</p>
                    <Button variant="contained" onClick={handleClickOpen} sx={{backgroundColor:'#0d6182'}}>
                        Trailer
                    </Button>
                    {/* <Link onClick={() => setIsOpen(true)}><button className='btn btn-outline-primary'>Trailer</button></Link> */}
                </div>
                {/* {isOpen && <ModalCase setIsOpen={setIsOpen} film={film}/>} */}
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth="md" fullWidth
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        <Typography gutterBottom>
                            {film.Title} trailer
                        </Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                            <iframe src={film.Trailer} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
                        </div>                        {/* <CardMedia 
                            component="iframe"
                            src={film.Trailer}
                            alt="Trailer"
                        /> */}
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </Container>
    )
}
