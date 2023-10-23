import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function AddFilm() {
    const thisFilm = useParams();

    const [films, setFilms] = useState({
        "Image": "",
        "Title": "",
        "Year": Date,
        "Nation": "",
        "Trailer": "",
        "Info": "",
    });

    const navigate = useNavigate();

    function AddFilm() {
        if (!films.Title || !films.Year || !films.Nation || !films.Image || !films.Trailer || !films.Info) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        axios.post(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films/`, films)
            .then(function (response) {
                navigate("/Dashboard");
            }).catch(function (error) {
                console.log(error);
            });
    }
    function changeText(event) {
        let defaultData = JSON.parse(JSON.stringify(films));
        defaultData[`${event.target.name}`] = event.target.value;


        setFilms(defaultData);

    }

    return (
        <Container>
            <Typography variant="h4" className="mt-4">
                Add Film
            </Typography>
            <form className='ps-5 pe-5'>
                <TextField
                    fullWidth
                    label="Title"
                    name="Title"
                    value={films.Title}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                    
                />
                <TextField
                    fullWidth
                    label="Year"
                    name="Year"
                    value={films.Year}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Nation"
                    name="Nation"
                    value={films.Nation}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Image"
                    name="Image"
                    value={films.Image}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Trailer"
                    name="Trailer"
                    value={films.Trailer}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Information"
                    name="Info"
                    value={films.Info}
                    onChange={changeText}
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={AddFilm}
                    sx={{ backgroundColor: '#0d6182' }}
                    className="ps-5 pe-5 mt-2">
                    Add
                </Button>
            </form>
        </Container>
    );
}
