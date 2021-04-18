import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const Tarjeta = ({ title, type, price, img, rating, isAvailable, onSale }) => {

console.log(
    `props de Tarjeta titulo:${title} tipo:${type}  
     precio:${price} imgURL: ${img} disponible: ${isAvailable} oferta:${onSale}`
    );

const useStyles = makeStyles((theme) => ({
root: {
    maxWidth: 345,
},
media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
},
expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
},
expandOpen: {
    transform: 'rotate(180deg)',
},

}));
      

return (
    <div>
        <Grid item xs={4}>
            <Card
                key={title}>
                <CardMedia 
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
                
            </Card>
         </Grid>
    </div>
    )
};
 
export default Tarjeta;