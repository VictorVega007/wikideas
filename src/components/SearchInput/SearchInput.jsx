import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect } from "react";
import {} from '../../styles/navbar.scss';
import { getTopics } from "../../shared/service";

export const SearchInput = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const getTitle = async () => {
      const response = await getTopics();
      const title = response.map(option => option.title);
      setData(title);
    };
    getTitle();
  }, [data]);

  return (
    <>
    <Stack spacing={2}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data}
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
    onClick={() => {}}>{<SearchOutlinedIcon/>}</Button>
    </>
  )
};