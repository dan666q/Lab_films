import { Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function About() {
  return (
    <Container>
      <p className='fs-1 mt-5 '>Who we are?</p>
      <div className='row mb-5'>
        <div className='col-md-4'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://cdnimg.vietnamplus.vn/t620/uploaded/ivpycivo/2023_06_20/cristiano_ronaldo_portugal_2403.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cristiano Ronaldo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        </div>
        <div className='col-md-4'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2022/12/19/messi-19122022-02.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Leo Messi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
    
          </Card>
        </div>
        <div className='col-md-4'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://vtv1.mediacdn.vn/zoom/640_400/2022/12/9/photo-1-16705558997871835381431-crop-1670555912188795621879.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Neymar Jr
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </Container>
  )
}
