import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import Grid from '@mui/material/Grid';
import { Typography, Box } from "@mui/material";
import { List, ListItem } from '@mui/material';
import { StaticImg } from "../../atoms/static-img/StaticImg";
import {} from "../../styles/navbar.scss";
import staticImg from "../../assets/W.png";

export const Nosotros = () => {
    return (
      <>
      <Grid style={{position:'relative'}}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid style={{padding:40, paddingBottom:60}}>
        <Typography> Wikideas es una enciclopedia en español escrita por usuarios voluntarios, totalmente abierta, libre,
          colaborativa y gratuita, es decir, que cualquiera puede editar un artículo, corregirlo o ampliarlo, que
          permite recopilar, almacenar y transmitir conocimiento e información de forma estructurada que
          puede ser creada o editada por cualquiera de nosotros en forma totalmente independiente.
        </Typography>
        <Typography>
          Para colaborar en Wikideas no es necesario registrarse. Los usuarios anónimos pueden crear,
          modificar o ampliar artículos existentes con total libertad.
        </Typography>
        <br />
        <Typography>
          Wikipedia te permite gestionar todos tus temas, contenidos y tópicos.
        </Typography>
        <br />
        <Typography>
        Existen tres características esenciales del proyecto Wikideas que definen en conjunto su función:
        </Typography>
        <br />
        <Typography>
          “Ser una enciclopedia libre que todos pueden editar” y se explica por los siguientes tres principios: ​
        </Typography>
        <List>
          <ListItem>
          · Es una enciclopedia, entendida como soporte que permite la recopilación, el almacenamiento y la transmisión de la información de forma estructurada.
          </ListItem>
          <ListItem>
          · Es un wiki, por lo que, con pequeñas excepciones, puede ser editada por cualquiera.
          </ListItem>
          <ListItem>
          · Es de contenido abierto.
          </ListItem>
        </List>
          <Typography>
          Las políticas seguidas por Wikideas se crean mediante consenso y se apoyan en cinco pilares:
        </Typography>
        <List>
          <ListItem>
          · Es una enciclopedia.
          </ListItem>
          <ListItem>
          · Busca un «punto de vista neutral».
          </ListItem>
          <ListItem>
          · Es de contenido libre.
          </ListItem>
          <ListItem>
          · Sigue unas reglas de etiqueta.
          </ListItem>
          <ListItem>
          · No tiene normas fijas.
          </ListItem>
          </List>
          <Grid className="static-img-container" style={{position: 'absolute', bottom: 50, left:100}}>
          <img src={staticImg} alt="static-img" className="static-img"/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
        </Grid>
      </>
    )
  }