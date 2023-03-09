import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import {} from '../../styles/navbar.scss';
import { useData } from "../../hook/useData";
import { CircularLoading } from "../../atoms/progress/CircularLoading";

export const CardSwipeable = () => {
  const { data, loading } = useData("https://wikideas-adriana75.vercel.app/api/v1/topics");

  return (
    <div className="container-card-text">
      <Typography gutterBottom variant="h5" component="div" className="module">
        Temas de la semana
      </Typography>
    <div className="cards-container">
    { loading && <div><CircularLoading /></div>}
      {
        data?.map(item => (
        <Card sx={{ width: "25%", marginX: 3 }} key={item.id}>
        <CardMedia
          sx={{ height: 250 }}
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="module">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="module line-clamp">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" className="text-formatted text-date">
            {`Fecha de publicación: ${new Date(item.publishDate).toLocaleDateString("es-cl")}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" className="text-formatted">
            {`Autor: ${item.author}`}
          </Typography>
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: "flex-end", paddingRight: 3}}>
          <Button size="small" color="secondary">Share</Button>
          <Button size="small" color="secondary">Learn More</Button>
        </CardActions>
      </Card>
        )).slice(0, 3)
      }
    
    </div>
    </div>
  )
}
