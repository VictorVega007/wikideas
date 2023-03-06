import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { useState, useEffect } from "react";
import {} from '../../styles/navbar.scss';
// import { getTopics } from "../../shared/service";
import { useData } from "../../hook/useData";

export const SearchInput = () => {
  const { data } = useData("https://wikideas-adriana75.vercel.app/api/v1/topics");

  return (
    <>
    <Stack spacing={2}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data.map(option => option.title)}
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