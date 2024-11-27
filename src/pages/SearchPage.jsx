import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../utils';
import { CircularProgress } from '@mui/material';
import {Content} from '../components/Content'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


export const SearchPage = () => {
const [page,setPage] = useState(1)
const [searchedWord,setSearchedWord] = useState('')
const [pageType,setPageType] = useState('movie')
const [fetchData,setFetchData] = useState(false)


const urlSearch = `https://api.themoviedb.org/3/search/${pageType}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&page=${page}`;



  
  
  const handleSearch=()=>{
   
    setFetchData(true)
  }



  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display : 'flex' , flexDirection : 'row' , alignItems : 'center', justifyContent : 'center'  }}
      noValidate
      autoComplete="off"
    >
      <TextField value={searchedWord} id="stantard-basic" label="Search" variant="standard" onChange={(e)=>setSearchedWord(e.target.value)} />
      <Button variant='outlined'  onClick={()=>handleSearch()}>Search</Button>
      
    </Box>
    <Box  sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display : 'flex' , flexDirection : 'row' , alignItems : 'center', justifyContent : 'center'  }}>
    <Button  color="success" variant="contained"  onClick={()=>setPageType('tv')}>Series</Button>
    <Button variant="contained" color="success"  onClick={()=>setPageType('movie')}>Movies</Button>
    </Box>
    
    {fetchData && <Content url={urlSearch} searchedWord={searchedWord} pageType={pageType} setFetchData={setFetchData} fetchData={fetchData} />}
    </>
  )
}
