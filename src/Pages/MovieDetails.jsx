import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=2279d912&i=${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  console.log(details)
  return (
    <Stack display='flex' alignItems='center' justifyContent='center' flexDirection='row' flexWrap='wrap' sx={{ mt: '50px' }}>
      <Card sx={{ width: '400px', backgroundColor: "#2a2d2e", color: "#fff" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={details?.Poster}
            alt={details?.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title : {details?.Title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Year : {details?.Year}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Released :{details?.Released}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Language : {details?.Language}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Country : {details?.Country}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
};

export default MovieDetails;
