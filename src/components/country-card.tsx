import { Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { ICountry } from '../api-data'

export const CountryCardComponent = ({country}:{country: ICountry}) => {

    const navigate = useNavigate();

    const theme = useTheme();

    /* go to detail */
    function clkCard(){
        navigate(`/countries/${country.alpha3Code}`);
    }
    
    return <Card sx={{ 
        maxWidth: 300,
        bgcolor: 'primary.main',
        color: 'text.primary',
         }} onClick={clkCard} style={{borderRadius: 0, margin: '0.5rem'}}>
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
            <Typography gutterBottom variant="h5" component="div" noWrap={true}>
            {country.name}
            </Typography>
            <Typography variant='h6' component="div">
            <div style={{fontWeight: 'bold'}}>Population: <span style={{color: theme.palette.text.secondary}}>{country.population}</span> </div>
            </Typography>
            <Typography variant="h6" component="div">
            <div style={{fontWeight: 'bold'}}>Region: <span style={{color: theme.palette.text.secondary}}>{country.region}</span> </div>
            </Typography>
            <Typography variant="h6" component="div">
            <div style={{fontWeight: 'bold'}}>Capital: <span style={{color: theme.palette.text.secondary}}>{country.capital}</span> </div>
            </Typography>
        </CardContent>
        </CardActionArea>
  </Card>
    
}