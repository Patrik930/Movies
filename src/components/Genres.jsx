import React from 'react'
import { Stack } from '@mui/material'
import { CircularProgress } from '@mui/material'
import SingleChip from './SingleChip'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

export const Genres = ({type,setUrlForGenres}) => {

    const [selectedGenres,setSelectedGenres] = useState([])
    console.log(selectedGenres);
    
  useEffect(()=>{
    if(selectedGenres.length<1) setUrlForGenres('')
    else setUrlForGenres(selectedGenres.join(','))
  },[selectedGenres])



    const urlGenres=`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`
    const {isError,error,isLoading,data}=useQuery({queryKey:['genres',urlGenres],queryFn:getData})

    
    if(isLoading) return <CircularProgress />

    if(isError) return <div>Error fetching data:{error.message}</div>



  return (
    <div>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap="5px" justifyContent="center">

            {data.genres.map(obj=>
                <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
            )}
        </Stack>
    </div>
  )
}
