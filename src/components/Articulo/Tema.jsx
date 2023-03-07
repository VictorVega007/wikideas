import { useData } from '../../hook/useData'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { Typography, Box, Card } from '@mui/material';
import { CircularLoading } from "../../atoms/progress/CircularLoading";
import {} from './tema.css';

export const Tema = (props) =>{

    
    function getRandomInt() {
        let id = Math.floor(Math.random() * 15)
        return id;
    }
    //const id = getRandomInt();
    const id = 7;
    const { data, setData } = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://wikideas-adriana75.vercel.app/api/v1/topics/${id}`);
            const datos = await response.json();
            setData(datos);
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Grid container spacing={0.5} display = {'flex'}>
                <Grid xs={8} className='contenido'>
                    <Box display='flex' flexDirection='column'>
                        <Item>
                            <Typography variant="h3" noWrap overflow="visible">
                                {}
                            </Typography>
                        </Item>
                        <Box boxShadow={3} height="100vh" width="100%" className="contenido">
                            <Item>
                                <Typography variant="body1" overflow="visible" textAlign="justify" marginBottom={10}>
                                    {}
                                </Typography>
                            </Item>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Item>
                        <Card>
                            <img src=""></img>
                        </Card>
                    </Item>
                    <Item>
                        {}
                    </Item>
                </Grid>
            </Grid>    
        </div>
        
    )
}