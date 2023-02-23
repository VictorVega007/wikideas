import { Typography, Grid } from "@mui/material";
import {} from '../../styles/navbar.scss';


export const HomeTitle = () => {
  return (
    <Grid className="container" >
      <Typography variant="h1">
        WikIdeas
      </Typography>

      <Typography variant="h5">
        Tú <strong>enciclopedia digital</strong> en la que puedes compartir y recibir conocimiento infinito.
      </Typography>

      <Typography variant="h5">
        Empieza encontrando el tema que más te guste en <strong>nuestro buscador!</strong>
      </Typography>
    </Grid>
  )
}
