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
import { getCategories } from "../../shared/service";

export const Formulario = () => {
  const [cat, setCat] = useState('');
  const [categoria, setCategoria] = useState('');
  const [categories, setCategories] = useState()

  useEffect(() => {
    const getCategoriesTitle = async() =>{
      const response = await getCategories();
      const data = response;
      setCategories(data)
    };
    getCategoriesTitle();
  }, [])
  

  const [formulario, setFormulario] = useState({
    title: "",
    description: "",
    category:1,
    author: "",
    image: "",
    tags: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:8000/api/v1/topics', {
      method: 'POST',
      body: formulario
    });
    const data = await response.json();
    console.log(data);
  }

  const handleChange = (event) => {
    setCategoria(event.target.value);
    console.log(categoria);
  };

  

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
      <Box component="form" autoComplete="off">
        
        <InputLabel id="demo-simple-select-standard-label" >Categoría</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={categoria}
            label="Categoría"
            onChange={handleChange}
          > 
          <div>
            {categories?.map(e=>
              <MenuItem value={e.id}>{e.title}</MenuItem>
            )}
          </div>
          </Select>        

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
          label="Author"
          variant="outlined"
          value={formulario.author}
          name="author"
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Tags"
          variant="outlined"
          value={formulario.tags}
          name="tags"
          onChange={handleChangeForm}
        />
        <Fab variant="extended" type="submit">
          <NavigationIcon sx={{ mr: 1 }} />
          Enviar
        </Fab>
      </Box>
    </FormControl>
  );
};
