import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../utils'
import { CircularProgress } from '@mui/material'
import { SingleContent } from './SingleContent'
import { useState } from 'react'
import { ContentPagination } from './ContentPagination'

export const Content = ({url,type,searchedWord,setFetchData,fetchData}) => {
  const [page,setPage] = useState(1)
  console.log(searchedWord);
  
  
    const {isLoading,isError,error,data}=useQuery({queryKey:['trendings',searchedWord?url+`&query=${searchedWord}`+"&page="+page : url+"&page="+page],queryFn:getData})

    if(isLoading) return <CircularProgress />

    if(isError) return <div>Error fetching data:{error.message}</div>
    console.log(data);


  return (
    <div className='content'>
        {data.results.map(obj=>
            <SingleContent key={obj.id} {...obj} type={type}/>
        )}
        <ContentPagination page={page} setPage={setPage} numberOfPage={data.total_pages}/>
    </div>
  )
}