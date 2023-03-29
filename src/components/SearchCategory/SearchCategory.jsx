import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {} from '../../styles/navbar.scss';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getCategories } from "../../shared/service";

export const SearchCategory = () => {
  const [data, setData ] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const [found, setFound] = useState();
  const navigate = useNavigate();

  const handleOnChange = (event, value) => {
    setSelectedValue(value)
    setFound(data.find(element => element.title == value))

  }

  const handleClick = () => {
    navigate(`/categories/${found.id}`)
    window.location.reload()
  }

  useEffect(() => {
    const obtenerCategories = async() => {
      const response = await getCategories();
      const datos = response;
      setData(datos);
    }
    obtenerCategories()
    
  }, [])
  


  return (
    <>
    <Stack spacing={2} zIndex={0}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data.map(item => item.title)}
        onChange={handleOnChange}
        renderInput={params => (
          <TextField 
            {...params}
            label="Búsqueda de Categoría"
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
    onClick={handleClick}>{<SearchOutlinedIcon/>}</Button>
    </>
  )
};