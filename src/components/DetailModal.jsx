import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../utils'
import { Button, CircularProgress } from '@mui/material';
import { noPictureLandscape } from '../utils';
import { img_500 } from '../utils';
import { Carousel } from './Carousel';
import YouTubeIcon from '@mui/icons-material/YouTube';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

export const DetailModal=({media_type,id,type,open,setOpen})=>{

    const urlDetails=`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;

   const urlVideos=`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;


    const {data,isLoading,isError,error}=useQuery({queryKey:['details', urlDetails],queryFn:getData})
    const {data:dataVideos,isLoading:isLoadingVideos,isError:isErrorVideos,error:errorVideos}=useQuery({queryKey:['videos', urlVideos],queryFn:getData})
 
  const handleClose = () => setOpen(false);

    if(isLoading|| isLoadingVideos) return <CircularProgress/>
    if(isError || isErrorVideos) return <p>Error fetching data: : {error.message || errorVideos.message}</p>
    console.log(data);
    

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 ${open ? 'block' : 'hidden'}`}>
    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={handleClose}></div>
    <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-6 overflow-y-auto max-h-[90vh]">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &times;
      </button>
      <img
        className="w-full rounded-lg"
        src={data.backdrop_path ? img_500 + data.backdrop_path : noPictureLandscape}
        alt={data?.title || data?.name}
      />
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800">{data?.title || data?.name}</h2>
        <p className="text-gray-600 text-sm italic mt-2">{data?.release_date || data?.first_air_date}</p>
        <p className="text-blue-500 italic mt-2">{data?.tagline}</p>
        <p className="text-gray-700 mt-4">{data?.overview}</p>
      </div>

      <Carousel id={id} media_type={media_type} />

      {dataVideos?.results && dataVideos?.results.length > 0 && (
        <div className="mt-4">
          <a
            href={`https://www.youtube.com/watch?v=${dataVideos?.results[0].key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <YouTubeIcon className="mr-2" />
            Watch The Trailer
          </a>
        </div>
      )}
    </div>
  </div>
    
  );
}
