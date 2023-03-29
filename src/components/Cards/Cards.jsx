import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonCard from './ButtonCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from "react-router-dom";
import { getTopics } from '../../shared/service';

import {} from '../../styles/navbar.scss';


export const CardSwipeable = () => {
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [topicsPerPage, setTopicsPerPage] = useState(3);

  useEffect(() => {
    const temas = async () => {
      const resultado = await getTopics();
      const datos = resultado;
      setTopics(datos);
      console.log(topics);
    };

    temas();
  }, []);

  const indexOfLastItem = currentPage * topicsPerPage;
  const indexOfFirstItem = indexOfLastItem - topicsPerPage;
  const currentTopics = topics.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const navigate = useNavigate();

  return (
    <>
      <Typography gutterBottom variant="h5" component="div" className="container-card-text" sx={{marginBottom: 0}}>
        Temas de la semana
      </Typography>
      <div className="cards-container">
        {currentTopics.map(item => (
         <Card sx={{ width: "25%", marginX: 3 }} key={item.id}>
        <CardMedia
          sx={{ height: 250 }}
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="module">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="module line-clamp">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" className="text-formatted text-date">
            {`Fecha de publicación: ${new Date(item.publishDate).toLocaleDateString("es-cl")}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" className="text-formatted">
            {`Autor: ${item.author}`}
          </Typography>
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: "flex-end", paddingRight: 3}}>
          <Button size="small" color="secondary">Share</Button>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab color='secondary' size="medium" onClick={() => navigate(`/tema/${item.id}`)}>
      <AutoStoriesIcon color='ffffff'/>
    </Fab>
    </Box>
        </CardActions>
      </Card>
        ))}
    </div>
    <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'center'} marginY={8}>

        <ArrowBackIosNewIcon color="secondary" onClick={handlePrevClick}
        style={{display: currentPage === 1 ? 'none' : 'inline' }}></ArrowBackIosNewIcon>

         <Button color="secondary" onClick={handlePrevClick} style={{display: currentPage === 1 ? 'none' : 'inline', margin:0  }}>Anterior</Button>

        <Card style={{margin:0}}><Typography style={{margin:15}}>{currentPage}</Typography></Card>

        <Button color="secondary" onClick={handleNextClick} style={{display: indexOfLastItem >= topics.length ? 'none' : 'inline', margin:0 }}>Siguiente</Button>

        <ArrowForwardIosIcon color="secondary" onClick={handleNextClick} 
        style={{display: indexOfLastItem >= topics.length ? 'none' : 'inline', margin:0  }}>Siguiente</ArrowForwardIosIcon>

        </Stack>
    </>
  );
}
