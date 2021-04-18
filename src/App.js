import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta from "./components/Tarjeta";



const App = () => {

  const products = [
    {
      title: 'Coombes',
      type: 'Lounge',
      price: 2600,
      rating: 4,
      img: 'https://i.imgur.com/ZAxMGG5.png',
      category: 'furniture',
      color: 'gray',
      collection: 'classic',
    },
    {
      title: 'Keeve Set',
      type: 'Table & Chairs',
      price: 590,
      rating: 4,
      img: 'https://i.imgur.com/tT8sFIs.jpeg',
      category: 'furniture',
      color: 'wood',
      collection: 'modern',
    },
    {
      title: 'Nillè',
      type: 'Armchair',
      price: 950,
      rating: 5,
      img: 'https://i.imgur.com/Vx1cZY0.png',
      category: 'furniture',
      color: 'orange',
      collection: 'classic',
    },
    {
      title: 'Blanko',
      type: 'Side table',
      price: 90,
      rating: 4,
      img: 'https://i.imgur.com/N1Bf4ox.jpg',
      category: 'furniture',
      color: 'white',
      collection: 'modern',
    },
    {
      title: 'Momo',
      type: 'Shelves',
      price: 890,
      rating: 4,
      img: 'https://i.imgur.com/AlKxDE4.jpeg',
      category: 'auxiliars',
      color: 'wood',
      collection: 'classic',
    },
    {
      title: 'Penemillè',
      type: 'Chair',
      price: 120,
      rating: 4,
      img: 'https://i.imgur.com/pmANPjN.jpeg',
      category: 'furniture',
      color: 'white',
      collection: 'modern',
    },
    {
      title: 'Kappu',
      type: 'Shelves',
      price: 420,
      rating: 4,
      img: 'https://i.imgur.com/s2rsPa1.jpg',
      category: 'auxiliars',
      color: 'wood',
      collection: 'classic',
    },
  ];

  return (
    <div className="App">
      
      <Grid container  spacing={2}>
        <Grid item xs={4}>Filtros
        </Grid>
        {
          products.map((producto, index) => {
            return <Tarjeta
              key={index}
              title={producto.title} 
              type = {producto.type}
              price = {producto.price}
              img={producto.img}
              rating= {producto.rating}
              isAvailable = {producto.isAvailable}
              onSale = {producto.onSale}
              />
          })
        }       
      </Grid>
   
      
    </div>
  );
}

export default App;
