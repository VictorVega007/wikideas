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

export const Formulario = () => {
  const [categoria, setCategoria] = useState('');
  const [categories, setCategories] = useState()
  const [found, setFound] = useState();

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
    //const value = e.target.type==='select-one' ? e.target.selectedOptions[0].value : e.target.value;
    let value;
    if(e.target.type==='select-one'){
      const cat = e.target.selectedOptions[0].value;
      const idCat = categories.map(e=> e.title == cat)
      value = idCat
    }else value = e.target.value

    console.log(value);
    setFormulario({
      ...formulario,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formulario);
    const respuesta = await enviarDatos(formulario);
    console.log(respuesta);
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
      <Box component="form" autoComplete="off">
        
        <InputLabel id="inputCategories" >Categoría</InputLabel>
        <Select name="category" value={formulario.category} onChange={handleChangeForm} >
          {categories?.map(e => (
            <MenuItem key={e.title} value={e.title}>{e.title}</MenuItem>
          ))}
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
