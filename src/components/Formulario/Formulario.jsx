import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Fab,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { getCategories, enviarDatos } from "../../shared/service";

export const FormularioAlta = (props) => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    const getCategoriesTitle = async() =>{
      const response = await getCategories();
      const data = response;
      setCategories(data)
      console.log(categories);
    };
    getCategoriesTitle();
  }, [])

  
  const [formulario, setFormulario] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    image: "",
    tags: "",
  });

  async function handleChangeForm(e){
    const value = e.target.type==='select-one' ? e.target.selectedOptions[0].value : e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    formulario.tags = formulario.tags.split(' ')
    console.log(formulario);
    const respuesta = await enviarDatos(formulario);    
    window.location.reload();
  }
  

   const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <FormControl fullWidth sx={style} id="formulario" onSubmit={handleSubmit}>
      <Box component="form" autoComplete="off" sx={{
          '& > :not(style)': { m: 0.5},
        }}>

<FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
  <Select
  fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="category" 
    value={formulario.category}
    label="Categoria"
    onChange={handleChangeForm}
  >
    {categories?.map(e => (
            <MenuItem key={e.id} value={e.id}>{e.title}</MenuItem>
          ))}
</Select>
      </FormControl>
        
          <TextField
          style={{ backgroundColor: "ffffff" }}
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={formulario.title}
          name="title"
          onChange={handleChangeForm}
        />


        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          value={formulario.description}
          name="description"
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={formulario.image}
          name="image"
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Tags"
          variant="outlined"
          value={formulario.tags}
          name="tags"
          multiline
          maxRows={3}
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={formulario.author}
          name="author"
          onChange={handleChangeForm}
        />
        <Box display={'flex'} justifyContent={'center'} >
        <Fab variant="extended" type="submit">
          <NavigationIcon sx={{ mr: 1 }} />
          Enviar
        </Fab>
        </Box>
      </Box>
    </FormControl>
  );
};
