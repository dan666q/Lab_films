import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Modal, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

export default function EditFilms() {
    const thisFilm = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const [deleteSuccessMessage, setDeleteSuccessMessage] = useState('');

    const [films, setFilms] = useState({});
    const [titleFilled, setTitleFilled] = useState(true);
    const [yearFilled, setYearFilled] = useState(true);
    const [nationFilled, setNationFilled] = useState(true);
    const [imageFilled, setImageFilled] = useState(true);
    const [trailerFilled, setTrailerFilled] = useState(true);
    const [infoFilled, setInfoFilled] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    function handleClick() {
        navigate("/Dashboard");
    }

    function getData() {
        axios.get(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films/${thisFilm.id}`)
            .then(function (response) {
                console.log(response);
                setFilms(response.data)
            }).catch(function (error) {
                console.log(error);
            });
    }

    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function updateData() {
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

        axios.put(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films/${thisFilm.id}`, {
            Title: films.Title,
            Year: films.Year,
            Nation: films.Nation,
            Image: films.Image,
            Trailer: films.Trailer,
            Info: films.Info,
        })
            .then(function (response) {
                handleOpen();
                setTimeout(() => {
                    handleClose();
                    setSuccessMessage('');
                    navigate('/Dashboard');
                }, 2000);
            }).catch(function (error) {
                console.log(error);
            });
    }

    function changeText(event) {
        const { name, value } = event.target;
        setFilms(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Reset the corresponding field's filled state when it's being typed
        switch (name) {
            case 'Title':
                setTitleFilled(!!value);
                break;
            case 'Year':
                setYearFilled(!!value);
                break;
            case 'Nation':
                setNationFilled(!!value);
                break;
            case 'Image':
                setImageFilled(!!value);
                break;
            case 'Trailer':
                setTrailerFilled(!!value);
                break;
            case 'Info':
                setInfoFilled(!!value);
                break;
            default:
                break;
        }
    }

    function deleteFilm() {
        axios.delete(`https://64abe6529edb4181202ec3ba.mockapi.io/Api/Films/${thisFilm.id}`)
            .then(function (response) {
                setDeleteSuccessMessage('Film deleted successfully.');
                handleOpenDeleteSuccessDialog();

                setTimeout(() => {
                    handleCloseDeleteSuccessDialog();
                    setDeleteSuccessMessage('');
                    navigate('/Dashboard');
                }, 2000);
            }).catch(function (error) {
                console.log(error);
            });
    }

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const [openDeleteSuccessDialog, setOpenDeleteSuccessDialog] = useState(false);

    const handleOpenDeleteSuccessDialog = () => {
        setOpenDeleteSuccessDialog(true);
    };

    const handleCloseDeleteSuccessDialog = () => {
        setOpenDeleteSuccessDialog(false);
    };

    return (
        <Container>
            <p className="fs-2 mt-4">Edit Film</p>
            <form>
                <TextField
                    fullWidth
                    label={films.Title}
                    name="Title"
                    value={films.Title}
                    onChange={changeText}
                    variant="outlined"
                    margin="normal"
                    error={!titleFilled}
                    helperText={!titleFilled && 'Please enter film\'s name'}
                />
                <TextField
                    fullWidth
                    label={films.Year}
                    name="Year"
                    value={films.Year}
                    onChange={changeText}
                    variant="outlined"
                    margin="normal"
                    error={!yearFilled}
                    helperText={!yearFilled && 'Please enter film\'s year'}
                />
                <TextField
                    fullWidth
                    label={films.Nation}
                    name="Nation"
                    value={films.Nation}
                    onChange={changeText}
                    variant="outlined"
                    margin="normal"
                    error={!nationFilled}
                    helperText={!nationFilled && 'Please enter film\'s nation'}
                />
                <TextField
                    fullWidth
                    label={films.Image}
                    name="Image"
                    value={films.Image}
                    onChange={changeText}
                    variant="outlined"
                    margin="normal"
                    error={!imageFilled}
                    helperText={!imageFilled && 'Please enter film\'s image'}
                />
                <TextField
                    fullWidth
                    label={films.Trailer}
                    name="Trailer"
                    value={films.Trailer}
                    onChange={changeText}
                    variant="outlined"
                    margin="normal"
                    error={!trailerFilled}
                    helperText={!trailerFilled && 'Please enter film\'s trailer'}
                />
                <TextField
                    fullWidth
                    label={films.Info}
                    name="Info"
                    value={films.Info}
                    onChange={changeText}
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    error={!infoFilled}
                    helperText={!infoFilled && 'Please enter film\'s information'}
                />
                <Button variant="contained" sx={{ backgroundColor: '#0d6182' }} onClick={updateData} className="ps-5 pe-5 mt-2">
                    Update
                </Button>
            </form>
            <Button className='ps-5 pe-5 mt-3' variant="outlined" sx={{ color: '#0d6182', border: 2 }} onClick={handleOpenDeleteDialog}>
                Delete
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
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
                        Update Successful
                    </Typography>
                </Box>
            </Modal>

            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this film?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                    <Button onClick={deleteFilm} sx={{ color: 'red' }}>
                        Confirm Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Modal
                open={openDeleteSuccessDialog}
                onClose={handleCloseDeleteSuccessDialog}
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
                        {deleteSuccessMessage}
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );
}
