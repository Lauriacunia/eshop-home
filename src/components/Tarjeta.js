import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

    
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });
    
const Tarjeta = ({ title, type, price, img, rating, isAvailable, onSale }) => {

console.log(
    `props de Tarjeta titulo:${title} tipo:${type}  
     precio:${price} imgURL: ${img} disponible: ${isAvailable} oferta:${onSale}`
    );

const classes = useStyles();
 

return (
    
    <Grid item xs={4}>
        <Card
            className={classes.root}
            key={title}>
            <CardMedia 
                className={classes.media}
                image={img}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            
        </Card>
    </Grid>
        
)
};
 
export default Tarjeta;