import { useEffect, useState } from 'react'
import Search from '../Components/Search'
import axios from 'axios'
import { CardContainer } from '../Components';
import { Stack } from '@mui/material';

const Home = () => {

  const [searchInput, setSearchInput] = useState('help');
  const [movies, setMovies] = useState([]);

  const handleMessageSubmit = (value) => { setSearchInput(value) }

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=2279d912&s=${searchInput}&type=movie`)
      .then((response) => {
        setMovies(response.data.Search);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchInput]);


  console.log(movies)
  return (
    <>
      <Stack display='flex' alignItems='center' justifyContent='center' flexDirection='row' flexWrap='wrap' sx={{ mt: '5px' }}>
        <Search onHandleSubmit={handleMessageSubmit} />
        <CardContainer movies={movies} />
      </Stack>
    </>
  )
}

export default Home