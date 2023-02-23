import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from "axios";
import { useState, useEffect } from "react";
import {} from '../../styles/navbar.scss';

const client = axios.create({
  baseURL: "https://wikideas-adriana75.vercel.app/api/v1/topics",
})

export const SearchInput = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const getTitle = async () => {
      const response = await client.get();
      setData(response.data);
    };
    getTitle();
  }, []);
  // console.log(data)

  return (
    <>
    <Stack spacing={2}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data.map((option) => option.title)}
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