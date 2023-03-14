import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const ButtonCard = () => {

    const [isPressed, setIsPressed] = useState(false);

  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab color={isPressed ? '#ffffff' : 'secondary'} size="medium" onClick={() => setIsPressed(!isPressed)}>
      <AutoStoriesIcon color={isPressed ? 'secondary' : 'ffffff'} />
    </Fab>
    </Box>
    </>
  )
}

export default ButtonCard

