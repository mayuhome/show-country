import { useState } from 'react'
import { ICountry } from '../api-data';
import { CountryCardComponent } from '../components/country-card';
import { RegionSelectComponent } from '../components/region-select';
import { SearchPanelCompoent } from '../components/search-panel';
import './country.css';

export const CountryListScreen = () => {
    const [param, setParam] = useState('');
    
    const countries: ICountry[] = JSON.parse(localStorage.getItem('countries')||'');

    return <div className='country-list'>
        <div className="search-part">
            <div className="search-panel">
                <SearchPanelCompoent param={param} setParam={setParam}/>
            </div>
    
            <div className="region-select">
                <RegionSelectComponent/>
            </div>
        
        </div>
        <div className="counties">
            {countries.map(country => <CountryCardComponent key={country.name} country={country}/>)}
        </div>
    </div>
}