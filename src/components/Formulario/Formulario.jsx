import React, {useState} from 'react'
import {Box, TextField, Autocomplete, MenuItem, Select, InputLabel, FormControl, Fab} from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';

 export const Formulario = () => {
    const [cat, setCat] = useState('');

    const [ formulario, setFormulario] = useState({
        title: '',
        description: '',
        category: '',
        author: '',
        image:'',
        tags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario ({
        ...formulario,
          [name]:value
        })
        }

        const style = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        };

  return (
    
         
    <FormControl sx={style}>
        <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& > :not(style)': { m: 1},
      }}
    >
      <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" value={formulario.title} name='title' onChange={handleChange} />
      
      <TextField
      fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          value={formulario.description}
          name='description'
          onChange={handleChange}
        />
      <TextField fullWidth  id="outlined-basic" label="Author" variant="outlined" value={formulario.author} name='author' onChange={handleChange} />
      <TextField fullWidth  id="outlined-basic" label="Tags" variant="outlined" value={formulario.tags} name='tags' onChange={handleChange}/>
      <Fab variant="extended" type='submit' >
  <NavigationIcon sx={{ mr: 1 }} />
  Enviar
</Fab>
    </Box> 
    </FormControl>
    
  )
}