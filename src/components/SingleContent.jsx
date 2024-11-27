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
    <Card sx={{ width: 345 }}>
    <CardActionArea onClick={()=>{setOpen(true)}}>
      <CardMedia
        sx={{ height: 400 }}
        image={poster_path ? img_300+poster_path : imgUnavailable}
        title={title||name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title||name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',display:'flex',justifyContent: 'space-between' }}>
          <span>{media_type}</span><span>{first_air_date||release_date}</span>
        </Typography>
        <span style={{position: 'absolute',top:'0',right:'0',color: 'white',border: '1px solid white',borderRadius: '20%',padding: '2px'}}>{vote_average.toFixed(1)}</span>
      </CardContent>
      </CardActionArea>
    </Card>
    {open && <DetailModal open={open} setOpen={setOpen} id={id}  media_type={media_type||type}/>}
    </>
  );
  
 
}

  
