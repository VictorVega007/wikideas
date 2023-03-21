import React,  {useEffect, useState} from 'react'
import { Grid, Typography, CardMedia, Box, Card, CardActions, Button, Stack} from "@mui/material"
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchCategory } from "../../components/SearchCategory/SearchCategory";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getTopicById, getTopicsByCategory } from '../../shared/service';
import { useNavigate, useParams } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Category = () => {

  const id = 3
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState();
  const [url, setUrl] = useState(null);
  const [category, setCategory] = useState(null);
  const [titleTopic, setTitleTopic] = useState(null);
  const [ID, setID] = useState(id);

  useEffect(()=>{

      const getTheme = async () => {
          const response = await getTopicById(Number(ID));
          const title = response.title;
          const description = response.description;
          const url = response.image;
          const category = response.category.title;
          const categoryID = response.category.id;
          
          setTitle(title);
          setDescription(description);
          setUrl(url);
          setCategory(category);
          setID(ID);
  
      const getThemeByCategory = async () => {
          const responseTopic = await getTopicsByCategory(categoryID);
          const titleTopic = responseTopic;
          setTitleTopic(titleTopic);

      };
      getThemeByCategory();
          
      };
      getTheme();
  }, [ID])

  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sx={{display: "flex", width: "100%", justifyContent: "center", height: "150px", alignItems: "center"}}>
          <SearchCategory />
        </Grid>
        <Grid item xs={12} sx={{paddingLeft:25, display: "flex", width: "100%", justifyContent: 'center' , alignItems: "center", textTransform: 'uppercase', fontSize: 20, marginY: 10}}>
          <Item height={'100%'}>
            <Typography variant='h5'>
            {category}
            </Typography>
            </Item>
          </Grid>
        {titleTopic?.map(item=>(
          <Grid justifyContent={'center'} marginX={20} marginBottom={10} container spacing={1}>
          <Grid xs={3} pl={10}>
          <CardMedia
          sx={{ height: 216 }}
          image={item.image}
          title={item.title}
          />
          </Grid>
          <Grid xs={8} height={200}>
            <Item style={{height: '100%', borderRadius:0}}>
            <Box  style={{height: '100%'}}>
            <Typography gutterBottom variant="h5" component="div" className="module" style={{textTransform: 'uppercase', height: '15%', fontSize: 18, marginTop:3}}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="module" style={{height: '60%', fontSize: 14}}>
            {item.description}
            </Typography>
            <CardActions sx={{display: "flex", justifyContent: "flex-end", paddingRight: 3}}>
          <Button size="small" color="secondary" onClick={() => navigate(`/tema/${item.id}`)} >Leer más</Button>
        </CardActions>
            </Box>
            </Item>
          </Grid>
        </Grid>
        ))}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}
