import { useState, useEffect } from "react";
import { getTopics } from '../../shared/service';
import Grid from '@mui/material/Grid'; // Grid version 1
//import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import {} from './tema.css';

export const Tema = () =>{

    const [ title, setTitle ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ url, setUrl ] = useState(null);

    useEffect(() => {
        const getTheme = async () => {
            const response = await getTopics();
            const title = response[0].title;
            const description = response[0].description;
            const image = response[0].image;
            setTitle(title);
            setDescription(description);
            setUrl(image)
        };
        getTheme();
      }, [title, description, url]);
      

    return (
        <Grid container spacing={0.5}>
            <Grid xs={3}>
                <Item>
                    Subtítulos
                </Item>
            </Grid>
            <Grid xs={6} className='contenido'>
                <Box display='flex' flexDirection='column'>
                    <Item>
                        <Typography variant="h3" noWrap overflow="visible">
                            {title}
                        </Typography>
                    </Item>
                    <Box boxShadow={3} height="100vh">
                        <Item>
                            <Typography variant="body1" overflow="visible" textAlign="justify">
                                {description}
                            </Typography>
                            <Item>
                                <img src={url}></img>
                            </Item>
                        </Item>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={3}>
                <Item>Referencias</Item>
            </Grid>
        </Grid>
    )
}