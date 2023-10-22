import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';

export default function Dashboard() {
    const [films, setFilms] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count == 0) {
            getData();
            setCount(1);
        }
    }, [])

    function getData() {
        const res = axios.get(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films`)
            .then(function (response) {
                console.log(response);
                setFilms(response.data)
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
            <p className='fs-1 mt-5'>Films Management</p>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#0d6182' }}>
                            <TableCell>id</TableCell>

                            <TableCell>Name</TableCell>
                            <TableCell align="left">Year</TableCell>
                            <TableCell align="left">Nation</TableCell>
                            <TableCell align="left">Trailer</TableCell>
                            <TableCell align="left">Info</TableCell>
                            <TableCell align="left">
                                <Button variant="contained" sx={{ backgroundColor: '#0d6182' }}>
                                    Add
                                </Button>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {films.map((film) => (
                            <TableRow key={film.id}>
                                <TableCell component="th" scope="row">
                                    {film.id}
                                </TableCell>
                                <TableCell align="left">{film.Title}</TableCell>
                                <TableCell align="left">{film.Year}</TableCell>
                                <TableCell align="left">{film.Nation}</TableCell>
                                <TableCell align="left" className='ellipsis' sx={{ maxWidth: '200px' }}>
                                    {film.Trailer}
                                </TableCell>

                                <TableCell align="left" className='ellipsis' sx={{ maxWidth: '200px' }}>
                                    {film.Info}
                                </TableCell>
                                <TableCell align="left">
                                    <Button variant="contained" sx={{ backgroundColor: '#0d6182' }}>
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
