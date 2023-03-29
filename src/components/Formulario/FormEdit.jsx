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
import { getTopicById, enviarDatos } from "../../shared/service";

export const FormEdit = (props) => {
 
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState();
  const [url, setUrl] = useState(null);
  const [tags, setTags] = useState(null);
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);
  const [ID, setID] = useState(props.id);
  const [categoryID, setCategoryID] = useState(null);

  useEffect(() => {
    const getTopic = async() =>{
      const response = await getTopicById(Number(ID));
            const title = response.title;
            const description = response.description;
            const url = response.image;
            const tags = response.tags;
            const author = response.author;
            const category = response.category.title;
            const categoryID = response.category.id;
            
            setTitle(title);
            setDescription(description);
            setUrl(url);
            setTags(tags);
            setAuthor(author);
            setCategory(category);
            setID(ID);
            setCategoryID(categoryID);

    };
    getTopic();
  }, [ID])

  
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
      <Box component="form" autoComplete="off" sx={{
          '& > :not(style)': { m: 0.5},
        }}>
        <InputLabel id="demo-simple-select-label"  fullWidth></InputLabel>
        <TextField
          style={{ backgroundColor: "ffffff" }}
          fullWidth
          id="outlined-basic"
          variant="outlined"
          value={category}
          name="title"
          onChange={handleChangeForm}
          disabled ={'false'}
        />  

          <TextField
          style={{ backgroundColor: "ffffff" }}
          fullWidth
          id="outlined-basic"
          variant="outlined"
          value={title}
          name="title"
          onChange={handleChangeForm}
        />

        <TextField
          fullWidth
          id="outlined-multiline-static"
          multiline
          rows={10}
          value={description}
          name="description"
          style={{textAlign: 'justify'}}
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          value={url}
          name="image"
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          variant="outlined"
          value={tags}
          name="tags"
          multiline
          maxRows={3}
          onChange={handleChangeForm}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          value={author}
          name="author"
          disabled ={'false'}
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
