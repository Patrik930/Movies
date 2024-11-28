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
const [query, setQuery] = useState('')
const [pageType,setPageType] = useState('movie')
const [fetchData,setFetchData] = useState(false)


const urlSearch = `https://api.themoviedb.org/3/search/${pageType}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&page=${page}`;


  const handleSearch=()=>{
   
    setFetchData(true)
    setQuery(searchedWord)
    
  }



  return (
    <>
    <div className="max-w-screen-lg mx-auto mt-16 px-4">
      
      <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
        <input
          type="text"
          className="w-full sm:w-80 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchedWord}
          placeholder="Search..."
          onChange={(e) => setSearchedWord(e.target.value)}
        />
        <button
          className="mt-4 sm:mt-0 sm:ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg transition-transform transform hover:scale-105"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

     
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-lg text-white font-bold transition-all transform bg-gray-800`}
          onClick={() => setPageType('tv')}
        >
          Series
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-white font-bold transition-all transform bg-gray-800`}
          onClick={() => setPageType('movie')}
        >
          Movies
        </button>
      </div>

      {fetchData && (
        <Content
          url={urlSearch}
          searchedWord={query}
          pageType={pageType}
          setFetchData={setFetchData}
          fetchData={fetchData}
        />
      )}
    </div>
    
    {fetchData && <Content url={urlSearch} searchedWord={query} pageType={pageType} setFetchData={setFetchData} fetchData={fetchData} />}
    </>
  )
}
