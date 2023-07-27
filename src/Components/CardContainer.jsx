import React from 'react'
import CardVideo from './CardVideo'
import { Stack } from '@mui/material'

const CardContainer = ({ movies }) => {

  return (


    <Stack display='flex' alignItems='center' justifyContent='center' flexDirection='row' flexWrap='wrap' gap='20px'
      sx={{ mt: '50px' }}>
      {
        movies.map((movie, index) =>
          <CardVideo key={index} movie={movie} />
        )
      }
    </Stack >
  )
}

export default CardContainer