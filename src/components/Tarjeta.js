import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

    
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 230,
    },
    pos: {
        marginBottom: 12,
      },
    details: {
    display: 'flex',
    justify: 'space-around'
    },
  });
    
const Tarjeta = ({ title, type, price, img, rating, isAvailable, onSale }) => {

console.log(
    `props de Tarjeta titulo:${title} tipo:${type}  
     precio:${price} imgURL: ${img} disponible: ${isAvailable} oferta:${onSale}`
    );

const classes = useStyles();
 

return (
    
    <Grid item xs={3}>
        <Card
            className={classes.root}
            key={title}>
            <CardMedia 
                className={classes.media}
                image={img}
            />
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {type.toUpperCase()}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                           
                        />
                    </div>
                    <div>
                        <Typography className={classes.pos} color="textSecondary">
                            ${price}
                        </Typography>
                        <ShoppingCartIcon/>
                      

                    </div>
                </div>
               
            </CardContent>
            
        </Card>
    </Grid>
        
)
};
 
export default Tarjeta;