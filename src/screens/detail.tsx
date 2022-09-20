import { Button, Chip } from '@mui/material';
import { Descriptions } from 'antd';
import { url } from 'inspector';
import { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ICountry } from '../api-data';
import './detail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DetailScreen = () => {
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
            <Button variant="outlined"onClick={goBackword} startIcon={<ArrowBackIcon />}>
                Back
            </Button>
        </div>
        <div className="detail">
            <img className="flag" src={country?.flag} alt={country?.name}/>

            <div className="info">
                <Descriptions title={<div>
                    <span style={{fontSize: '30px'}}>{country?.name}</span>
                </div>} column={2}>
                <Descriptions.Item label="Native Name">{country?.nativeName}</Descriptions.Item>
                <Descriptions.Item label="Top Level Domain">{country?.topLevelDomain[0]||''}</Descriptions.Item>
                <Descriptions.Item label="Population">{country?.population}</Descriptions.Item>
                <Descriptions.Item label="Currencies">{country?.currencies.map(m => m.name).join(',')}</Descriptions.Item>
                <Descriptions.Item label="Region">{country?.region}</Descriptions.Item>
                <Descriptions.Item label="Languages">{country?.languages.map(m => m.name).join(',')}</Descriptions.Item>
                <Descriptions.Item label="Sub Region">{country?.subregion}</Descriptions.Item>
                <Descriptions.Item label="Capital">{country?.capital}</Descriptions.Item>
                <Descriptions.Item style={{marginTop: '3rem', paddingTop: '5rem'}} label="Border Countries">
                    {country?.borders?.map(m => <div onClick={()=>routerToCountry(m)}>
                    <Chip label={getName(m)} 
                    style={{marginRight: '1rem', borderRadius: '0.5rem', cursor: 'pointer'}}/>
                    </div>
                    )}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    </div>
}