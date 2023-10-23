import React from 'react';
import { Container, TextField, Button, Typography, Box, Modal } from '@mui/material';
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
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    function handleSuccessModalOpen() {
        setSuccessModalOpen(true);
    }

    function handleSuccessModalClose() {
        setSuccessModalOpen(false);
    }

    const navigate = useNavigate();
    const [titleFilled, setTitleFilled] = useState(true);
    const [yearFilled, setYearFilled] = useState(true);
    const [nationFilled, setNationFilled] = useState(true);
    const [imageFilled, setImageFilled] = useState(true);
    const [trailerFilled, setTrailerFilled] = useState(true);
    const [infoFilled, setInfoFilled] = useState(true);

    function AddFilm() {
        // Check if any field is blank
        if (!films.Title || !films.Year || !films.Nation || !films.Image || !films.Trailer || !films.Info) {
            // Update the state variables for each field
            setTitleFilled(!!films.Title);
            setYearFilled(!!films.Year);
            setNationFilled(!!films.Nation);
            setImageFilled(!!films.Image);
            setTrailerFilled(!!films.Trailer);
            setInfoFilled(!!films.Info);
            return;
        }
      axios.post(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films/`, films)
            .then(function (response) {
                handleSuccessModalOpen();
                setTimeout(() => {
                    handleSuccessModalClose();
                    navigate('/Dashboard');
                }, 2000);
            }).catch(function (error) {
                console.log(error);
            });
    }
    function changeText(event) {
        let defaultData = JSON.parse(JSON.stringify(films));
        defaultData[`${event.target.name}`] = event.target.value;
        setFilms(defaultData);
        // Reset the corresponding field's filled state when it's being typed
        switch (event.target.name) {
            case 'Title':
                setTitleFilled(true);
                break;
            case 'Year':
                setYearFilled(true);
                break;
            case 'Nation':
                setNationFilled(true);
                break;
            case 'Image':
                setImageFilled(true);
                break;
            case 'Trailer':
                setTrailerFilled(true);
                break;
            case 'Info':
                setInfoFilled(true);
                break;
            default:
                break;
        }
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
                    error={!titleFilled} // Set error prop based on filled state
                    helperText={!titleFilled && "Please enter film's name"} // Show helper text if field is not filled

                />
                <TextField
                    fullWidth
                    label="Year"
                    name="Year"
                    value={films.Year}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                    error={!yearFilled} // Set error prop based on filled state
                    helperText={!yearFilled && "Please enter film's year"} // Show helper text if field is not filled

                />
                <TextField
                    fullWidth
                    label="Nation"
                    name="Nation"
                    value={films.Nation}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                    error={!nationFilled} // Set error prop based on filled state
                    helperText={!nationFilled && "Please enter film's nation"} // Show helper text if field is not filled

                />
                <TextField
                    fullWidth
                    label="Image"
                    name="Image"
                    value={films.Image}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                    error={!imageFilled} // Set error prop based on filled state
                    helperText={!imageFilled && "Please enter film's image"} // Show helper text if field is not filled

                />
                <TextField
                    fullWidth
                    label="Trailer"
                    name="Trailer"
                    value={films.Trailer}
                    onChange={changeText}
                    margin="normal"
                    variant="outlined"
                    error={!trailerFilled} // Set error prop based on filled state
                    helperText={!trailerFilled && "Please enter film's trailer"} // Show helper text if field is not filled

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
                    error={!titleFilled} // Set error prop based on filled state
                    helperText={!titleFilled && "Please enter film's information"} // Show helper text if field is not filled

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
                <Modal
                open={successModalOpen}
                onClose={handleSuccessModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '4px solid #0d6182',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "10px"
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Film Added Successfully
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );
}
