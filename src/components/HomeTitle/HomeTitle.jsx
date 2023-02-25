import { Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { useEffect } from "react";
import {} from '../../styles/navbar.scss';

export const HomeTitle = () => {
  const timeline = gsap.timeline();

  useEffect(() => {
    const text = document.querySelectorAll(".title");
    timeline.to(text, { opacity: 1, x: 50, duration: 2, stagger: 0.3 })
  }, [timeline]);

  return (
    <Grid className="container" >
      <Typography variant="h1" className="title" color="secondary">
        WikIdeas
      </Typography>
      
      <hr className="separator title"/>

      <Typography variant="h5" className="title">
        Tú <strong>enciclopedia digital</strong> en la que puedes compartir y recibir conocimiento infinito.
      </Typography>

      <Typography variant="h5" className="title">
        Empieza encontrando el tema que más te guste en <strong>nuestro buscador!</strong>
      </Typography>
    </Grid>
  )
}
