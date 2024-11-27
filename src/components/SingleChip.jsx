import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useState } from 'react';

export default function SingleChip({id,name,selectedGenres,setSelectedGenres}) {

    const [selected,setSelected] = useState(false)

  

    const handleClick=()=>{
        if(selectedGenres.indexOf(id)==-1){
            setSelectedGenres(prev=>[...prev,id])
        }else{
            setSelectedGenres(prev=>prev.filter(item=>item!=id))
        }
        setSelected(!selected)
    }

  return (
    
      <Chip icon={selected ? <DoneIcon sx={{color: 'green'}}/> : <PanoramaFishEyeIcon/>} label={name} clickable onClick={handleClick} />
  );
}