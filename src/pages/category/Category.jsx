import { Grid, Typography } from "@mui/material"
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchCategory } from "../../components/SearchCategory/SearchCategory";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Category = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sx={{display: "flex", width: "100%", justifyContent: "center", height: "150px", alignItems: "center"}}>
          <SearchCategory />
        </Grid>
        <Grid item xs={12}>
        <Typography textAlign="left">Categorias</Typography>
        <hr />
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}
