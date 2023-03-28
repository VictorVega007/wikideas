import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

export const Nosotros = () => {
    return (
      <>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Typography height={556} display={'flex'} justifyContent={'center'} alignItems={'center'}> ACA IRÍA INFORMACIÓN SOBRE NOSOTROS</Typography>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </>
    )
  }