import { Box, Container, Typography, Grid } from "@mui/material"

export const Footer = () => {
  return (<>
       <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#3C55BD",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#ffff" variant="h5">
              WikIdeas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#ffff" variant="subtitle1">
              Desarrollado por Athena - Equipo de Id For Ideas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#ffff" variant="subtitle1">
              {`Derechos Reservados - ${new Date().getFullYear()} | Facebook | Instagram | Blog`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>)
}