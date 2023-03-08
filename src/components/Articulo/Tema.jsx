import { getTopicById } from '../../shared/service';
import { useEffect, useState} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { Typography, Box, Stack, Chip} from '@mui/material';
import {} from './tema.css';

export const Tema = () =>{

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [url, setUrl] = useState(null);
    const [tags, setTags] = useState(null);
    const [author, setAuthor] = useState(null);
    const [date, setDate] = useState(null);
 
    useEffect(() => {
        const getTheme = async () => {
            const id = 7;
            const response = await getTopicById(id);
            const title = response.title;
            const description = response.description;
            const url = response.image;
            const tags = response.tags;
            const author = response.author;
            const date = response.publishDate;
            setTitle(title);
            setDescription(description);
            setUrl(url);
            setTags(tags);
            setAuthor(author);
            setDate(date);
        };
        getTheme();
    }, []);

    return (
        <div>
            <Grid container spacing={0.5} display = {'flex'}>
                <Grid xs={7} className='contenido' marginLeft={5}>
                    <Box display='flex' flexDirection='column'>
                        <Item>
                            <Typography variant="h3" noWrap overflow="visible">
                                {title}
                            </Typography>
                        </Item>
                        <Box boxShadow={3} width="100%" overflow="hidden">
                            <Item>
                                <Typography variant="body1" overflow="visible" textAlign="justify" marginBottom={10}>
                                    {description}
                                </Typography>
                            </Item>
                            <Item>
                                <Typography variant="body1" className='author'>
                                    Publicada por: {author} el {date}
                                </Typography>
                                <Typography variant="body1" className='author'>
                                    Modificada por: {author} 
                                </Typography>
                    </Item>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={4} marginTop={13} marginLeft={10}>
                    <Item>
                        <img src={url} className="img-theme"></img>
                    </Item>
                    <Item className='container-tags'>
                        {
                            <Stack direction="row" spacing={4}>
                                {tags?.map(e=>(
                                    <Chip label={e}></Chip>
                                ))}
                            </Stack>
                        }
                    </Item>
                    
                </Grid>
            </Grid>    
        </div>
        
    )
}