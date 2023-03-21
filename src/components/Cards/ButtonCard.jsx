import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from "react-router-dom";


const ButtonCard = () => {
  const navigate = useNavigate();

    const [isPressed, setIsPressed] = useState(false);

    const Onclick= ()=>{
      setIsPressed(!isPressed);
      navigate(`/tema`);
    }

  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab color={isPressed ? '#ffffff' : 'secondary'} size="medium" onClick={Onclick}>
      <AutoStoriesIcon color={isPressed ? 'secondary' : 'ffffff'} />
    </Fab>
    </Box>
    </>
  )
}

export default ButtonCard

