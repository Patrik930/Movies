import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { img_300, imgUnavailable } from '../utils';
import { CardActionArea } from '@mui/material';
import {DetailModal} from './DetailModal'

export const SingleContent = ({id,poster_path,title,name,first_air_date,release_date,media_type,vote_average,type}) => {

  const [open, setOpen] = React.useState(false);
  



  return (
  <>
  
    
   
      <a class="relative shadow-lg shadow-cyan-500/50 bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24" href="#">
  
  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  <div class="my-4">
      <img src={poster_path ? img_300+poster_path : imgUnavailable} alt="" />
      <h2 class="text-white text-2xl font-bold pb-2">{title||name}</h2>
      <p class="text-gray-300 py-1">{first_air_date||release_date}</p>
  </div>

  <div class="flex justify-end">
      <button class='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg' onClick={()=>{setOpen(true)}}>More Info</button>
  </div>
</a>
      
    {open && <DetailModal open={open} setOpen={setOpen} id={id}  media_type={media_type||type}/>}
    </>
  );
  
 
}

  

