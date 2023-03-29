import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {} from '../../styles/navbar.scss';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getTopics } from "../../shared/service";

export const SearchInput = () => {
  const [data, setData ] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const [found, setFound] = useState();

  const navigate = useNavigate();


  const handleOnChange = (event, value) => {
    setSelectedValue(value)
    setFound(data.find(element => element.title == value))
  }

  
  useEffect(() => {
    const obtenerTemas = async() => {
      const response = await getTopics();
      const datos = response;
      setData(datos);
    }
    obtenerTemas()
    
  }, [])

  

  return (
    <>
    <Stack spacing={2} zIndex={0}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data.map(option => option.title)}
        onChange={handleOnChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Búsqueda de Tema"
            InputProps={{
              ...params.InputProps,
              type: 'search'
            }}
          />
        )} 
      />
    </Stack>
    <Button
    size="large"
    aria-label="search"
    onClick={() => navigate(`/tema/${found.id}`)}>{<SearchOutlinedIcon/>}</Button>
    </>
  )
};