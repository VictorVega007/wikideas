import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {} from '../../styles/navbar.scss';
// import { getTopics } from "../../shared/service";
import { useData } from "../../hook/useData";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const SearchCategory = () => {
  const { data } = useData("https://wikideas-adriana75.vercel.app/api/v1/categories");
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