import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { ICountry } from '../api-data'

export const CountryCardComponent = ({country}:{country: ICountry}) => {

    const navigate = useNavigate();

    /* go to detail */
    function clkCard(){
        navigate(`/countries/${country.alpha3Code}`);
    }
    
    return <Card sx={{ maxWidth: 300 }} onClick={clkCard} style={{borderRadius: 0, margin: '0.5rem'}}>
        <CardActionArea>
        <CardMedia
            className='img'
            component="img"
            height="180"
            width="300"
            image={country.flag}
            alt={country.name}
        />
        <CardContent style={{margin: '0.5rem'}}>
            <Typography gutterBottom variant="h4" component="div" noWrap={true}>
            {country.name}
            </Typography>
            <Typography variant="h5" component="div">
            <div style={{fontWeight: 'bold'}}>Population: <span style={{color: 'gray'}}>{country.population}</span> </div>
            </Typography>
            <Typography variant="h5" component="div">
            <div style={{fontWeight: 'bold'}}>Region: <span style={{color: 'gray'}}>{country.region}</span> </div>
            </Typography>
            <Typography variant="h5" component="div">
            <div style={{fontWeight: 'bold'}}>Capital: <span style={{color: 'gray'}}>{country.capital}</span> </div>
            </Typography>
        </CardContent>
        </CardActionArea>
  </Card>
    
}