import { useEffect, useState } from 'react'
import { ICountry } from '../api-data';
import { CountryCardComponent } from '../components/country-card';
import { RegionSelectComponent } from '../components/region-select';
import { SearchPanelCompoent } from '../components/search-panel';
import { ERegion } from '../utils/region';
import './country.css';

export const CountryListScreen = () => {
    const [param, setParam] = useState('');

    const [region, setRegion] = useState<ERegion>(ERegion.All);
    
    const countries: ICountry[] = JSON.parse(localStorage.getItem('countries')||'');

    const [filterCountries, setFilterCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        const rel = countries.filter(f => f.name.toLowerCase().includes(param.trim().toLowerCase()) && 
        ((region&&region!==ERegion.All)?f.region === region:true));
        setFilterCountries(rel);
    }, [param, region]);


    return <div className='country-list'>
        <div className="search-part">
            <div className="search-panel">
                <SearchPanelCompoent param={param} setParam={setParam}/>
            </div>
    
            <div className="region-select">
                <RegionSelectComponent region={region} setRegion={setRegion}/>
            </div>
        
        </div>
        <div className="counties">
            {filterCountries.map(country => <CountryCardComponent key={country.name} country={country}/>)}
        </div>
    </div>
}