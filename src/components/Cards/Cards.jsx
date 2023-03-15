import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonCard from './ButtonCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pagination from '@mui/material/Pagination';

import {} from '../../styles/navbar.scss';


export const CardSwipeable = () => {
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [topicsPerPage, setTopicsPerPage] = useState(3);

  useEffect(() => {
    // función para obtener la información de la base de datos
    const temas = async () => {
      // Llamar a una API o a una función que obtenga los datos de la base de datos
      // y luego almacenarlos en el estado local utilizando el hook `setTopics`
      const resultado = await fetch("https://wikideas-adriana75.vercel.app/api/v1/topics");
      const datos = await resultado.json();
      setTopics(datos);
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

  return (
    <div className="container-card-text">
      <Typography gutterBottom variant="h5" component="div" className="">
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
              <ButtonCard />
        </CardActions>
      </Card>
        ))}
    </div>
    <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'center'} marginY={8}>

        <ArrowBackIosNewIcon color="secondary" onClick={handlePrevClick}
        style={{display: currentPage === 1 ? 'none' : 'inline' }}></ArrowBackIosNewIcon>

         <Button color="secondary" onClick={handlePrevClick} style={{display: currentPage === 1 ? 'none' : 'inline', margin:0  }}>Anterior</Button>

        <Card><Typography style={{margin:15}}>{currentPage}</Typography></Card>

        <Button color="secondary" onClick={handleNextClick} style={{display: indexOfLastItem >= topics.length ? 'none' : 'inline', margin:0 }}>Siguiente</Button>

        <ArrowForwardIosIcon color="secondary" onClick={handleNextClick} 
        style={{display: indexOfLastItem >= topics.length ? 'none' : 'inline', margin:0  }}>Siguiente</ArrowForwardIosIcon>

        </Stack>
    </div>
  );
}
