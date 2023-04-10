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
        <Typography height={556} display={'flex'} justifyContent={'center'} alignItems={'center'}> Wikideas es una enciclopedia en español escrita por usuarios voluntarios, totalmente abierta, libre,
colaborativa y gratuita, es decir, que cualquiera puede editar un artículo, corregirlo o ampliarlo, que
permite recopilar, almacenar y transmitir conocimiento e información de forma estructurada que
puede ser creada o editada por cualquiera de nosotros en forma totalmente independiente.
Para colaborar en Wikideas no es necesario registrarse. Los usuarios anónimos pueden crear,
modificar o ampliar artículos existentes con total libertad.
Wikipedia te permite gestionar todos tus temas, contenidos y tópicos.
Existen tres características esenciales del proyecto Wikideas que definen en conjunto su función:
“Ser una enciclopedia libre que todos pueden editar” y se explica por los siguientes tres principios: ​
 Es una enciclopedia, entendida como soporte que permite la recopilación, el
almacenamiento y la transmisión de la información de forma estructurada.
 Es un wiki, por lo que, con pequeñas excepciones, puede ser editada por cualquiera.
 Es de contenido abierto.
Las políticas seguidas por Wikideas se crean mediante consenso y se apoyan en cinco pilares:
 Es una enciclopedia.
 Busca un «punto de vista neutral».
 Es de contenido libre.
 Sigue unas reglas de etiqueta.
 No tiene normas fijas.</Typography>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </>
    )
  }