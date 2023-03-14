import { Grid, Typography, CardContent } from "@mui/material"
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchCategory } from "../../components/SearchCategory/SearchCategory";
import { useData } from "../../hook/useData";
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

  const { data, loading } = useData("https://wikideas-adriana75.vercel.app/api/v1/topics");
  const { data1 } = useData("https://wikideas-adriana75.vercel.app/api/v1/categories");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sx={{display: "flex", width: "100%", justifyContent: "center", height: "150px", alignItems: "center"}}>
          <SearchCategory />
        </Grid>
        {
        data1?.map(item => (
        <Grid item xs={12}>
          <Item>{item.title}</Item>
          </Grid>
        ))}
        {
        data?.map(item => (
        <CardContent style={{flexDirection: 'row', display: 'flex'}}>
        <Grid item xs={4} paddingX={5}>
          <Item>{item.title}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{item.description}</Item>
        </Grid>
        </CardContent>
        ))}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}
