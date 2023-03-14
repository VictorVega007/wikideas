import { Autocomplete, Stack, TextField } from "@mui/material"
import { Button } from "../../atoms/button/Button";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {} from '../../styles/navbar.scss';
// import { getTopics } from "../../shared/service";
import { useData } from "../../hook/useData";

export const SearchCategory = () => {
  const { data } = useData("https://wikideas-adriana75.vercel.app/api/v1/categories");

  const {category } = useData("https://wikideas-adriana75.vercel.app/api/v1/topics");

  console.log(category);


  return (
    <>
    <Stack spacing={2}>
      <Autocomplete
        id="search-input"
        options={!data ? [] : data.map(item => item.title)}
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
    onClick={() => {}}>{<SearchOutlinedIcon/>}</Button>
    </>
  )
};