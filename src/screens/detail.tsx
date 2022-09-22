import { Button, Chip, useTheme } from '@mui/material';
import { Descriptions } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { ICountry } from '../api-data';
import './detail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DetailScreen = () => {

    const theme = useTheme();
    const { code } = useParams();
    const countries: ICountry[] = JSON.parse(localStorage.getItem('countries')||'');
    const country = countries.find(f => f.alpha3Code === code);
    

    /* get border country name */
    function getName(border: string){
        return countries.find(country => country.alpha3Code === border)?.name;
    }


    const navigate = useNavigate();

    /* go to detail */
    function routerToCountry(countryCode: string){
        navigate(`/countries/${countryCode}`);
    }

    function goBackword(){
        navigate(`/countries`);
    }
    
    return <div className='detail-container'>
        <div className="back">
            <Button style={{
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                borderColor: theme.palette.text.primary
            }} variant="outlined" onClick={goBackword} startIcon={<ArrowBackIcon />}>
                Back
            </Button>
        </div>
        <div className="detail" style={{color: theme.palette.text.primary}}>
            <img className="flag" src={country?.flag} alt={country?.name}/>

            <div className="info">
                <Descriptions labelStyle={{fontWeight: 600, color: theme.palette.text.primary}} contentStyle={{color: theme.palette.text.secondary}} title={<div>
                    <span style={{fontSize: '30px',color: theme.palette.text.primary}}>{country?.name}</span>
                </div>} column={2}>
                <Descriptions.Item label="Native Name">{country?.nativeName}</Descriptions.Item>
                <Descriptions.Item label="Top Level Domain">{country?.topLevelDomain[0]||''}</Descriptions.Item>
                <Descriptions.Item label="Population">{country?.population}</Descriptions.Item>
                <Descriptions.Item label="Currencies">{country?.currencies.map(m => m.name).join(',')}</Descriptions.Item>
                <Descriptions.Item label="Region">{country?.region}</Descriptions.Item>
                <Descriptions.Item label="Languages">{country?.languages.map(m => m.name).join(',')}</Descriptions.Item>
                <Descriptions.Item label="Sub Region">{country?.subregion}</Descriptions.Item>
                <Descriptions.Item label="Capital">{country?.capital}</Descriptions.Item>
                <Descriptions.Item className='border-item' label="Border Countries">
                    <div className="border-detail">
                    {country?.borders?.map(m => <div key={m} onClick={()=>routerToCountry(m)}>
                    <Chip label={getName(m)} 
                    style={{margin: '0.3rem 0.5rem', borderRadius: '0.5rem', cursor: 'pointer'}}/>
                    </div>
                    )}
                    </div>
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    </div>
}