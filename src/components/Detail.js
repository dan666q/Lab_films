import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, CardActionArea, CardActions, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalCase from './ModalCase';

import { Films } from '../shared/ListOfFilm';
export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container className=' mb-5' sx={{textAlign: 'justify'}}>
            <div className='row mt-5'>
                <div className='col-md-4'><img className='img-fluid images' src={`../${film.Image}`} /></div>
                <div className='col-md-8 justify'>
                    <p className='fs-1'>{film.Title}</p>
                    <p className='fs-4'>Nation: {film.Nation}</p>
                    <p className='fs-4'>Year: {film.Year}</p>
                    <p className='fs-5'>{film.Info}</p>
                    <Link onClick={() => setIsOpen(true)}><button className='btn btn-outline-primary'>Trailer</button></Link>
                </div>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film}/>}
            </div>
        </Container>
    )
}
