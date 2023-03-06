import { useState, useEffect } from "react";
import { getTopics } from '../../shared/service';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { Typography, Box, Card, CardMedia } from '@mui/material';
//import { Card } from '@material-ui/core';
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
            const url = response[0].image;
            setTitle(title);
            setDescription(description);
            setUrl(url);
        };
        getTheme();
      }, []);      

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
                    <Box boxShadow={3} height="130vh" width="100%" className="contenido">
                        <Item>
                            <Typography variant="body1" overflow="visible" textAlign="justify" marginBottom={10}>
                                {description}
                            </Typography>
                            <Card>
                                <img src={url}></img>
                            </Card>
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