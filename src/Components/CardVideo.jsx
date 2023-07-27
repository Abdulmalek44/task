import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CardVideo = ({ movie }) => {
  const title = movie?.Title.slice(0, 20)
  const poster = movie?.Poster
  const year = movie?.Year
  const id = movie?.imdbID
  return (
    <>
      <Card sx={{ width: '280px', backgroundColor: "#2a2d2e", color: "#fff" }} >
        <CardMedia
          sx={{ height: 140 }}
          image={poster}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" >
            {year}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/search-details/${id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}

export default CardVideo