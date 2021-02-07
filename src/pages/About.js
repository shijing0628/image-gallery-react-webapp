import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const theme = createMuiTheme({
 palette: {
  primary: {
   main: "#764abc"
  }
 },
 background: {
  default: "#fff"
 }
})

const useStyles = makeStyles((theme) => ({
 hero: {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')`,
  height: "500px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "4rem",
  [theme.breakpoints.down("sm")]: {
   height: 300,
   fontSize: "3em"
  }
 },
 blogsContainer: {
  paddingTop: theme.spacing(3)
 },
 blogTitle: {
  fontWeight: 800,
  paddingBottom: theme.spacing(3)
 },
 card: {
  maxWidth: "100%",
  "&:hover": {
   backgroundColor: '#F5F0FC'
  }
 },

 media: {
  height: 240
 },
 cardActions: {
  display: "flex",
  margin: "0 10px",
  justifyContent: "space-between"
 },
 author: {
  display: "flex"
 },
 paginationContainer: {
  display: "flex",
  justifyContent: "center"
 }
}));

function About() {
 const history = useHistory();
 const classes = useStyles();

 const handleClick = () => {

  history.push("/history");
 }


 return (
  <ThemeProvider theme={theme}>

   <Box className={classes.hero}>
    <Box>Art Gallery Blog</Box>
   </Box>

   <Container maxWidth="lg" className={classes.blogsContainer}>

    <Typography variant="h4" className={classes.blogTitle}>
     Articles
    </Typography>
    <Grid container spacing={3}>

     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1612447006943-4374ddb2adbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          History
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
         </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Clemons
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
          </Typography>
         </Box>
        </Box>
        <Box>
        </Box>
       </CardActions>
      </Card>
     </Grid>

     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1563674881-8abcee2b556a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          New Event One
          </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Clemons
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
          </Typography>
         </Box>
        </Box>
        <Box>
        </Box>
       </CardActions>
      </Card>
     </Grid>

     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1565298931044-131f92b20edc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          New Event Two
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Tom
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
          </Typography>
         </Box>
        </Box>
        <Box>

        </Box>
       </CardActions>
      </Card>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1548678792-8470d06d9808?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          New Event Three
          </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Sam
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
           </Typography>
         </Box>
        </Box>
        <Box>
        </Box>
       </CardActions>
      </Card>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1553101331-ce6281c677b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          New Event Four
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Lucy
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
          </Typography>
         </Box>
        </Box>
        <Box>

        </Box>
       </CardActions>
      </Card>
     </Grid>
     <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
       <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.unsplash.com/photo-1566197027061-b5a0690ab617?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
         title="Contemplative Reptile"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          New Event Five
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
        </CardContent>
       </CardActionArea>
       <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
         <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         <Box ml={2}>
          <Typography variant="subtitle2" component="p">
           Guy Mary
           </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
           May 14, 2020
          </Typography>
         </Box>
        </Box>
        <Box>

        </Box>
       </CardActions>
      </Card>
     </Grid>
    </Grid>
    <Box my={4} className={classes.paginationContainer}>
     <Pagination count={10} />
    </Box>
   </Container>

  </ ThemeProvider >
 );
}

export default About;
