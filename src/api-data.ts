export interface ICountry {
    name: string;
    nativeName: string;
    /* top level domain */
    topLevelDomain: string[];
    population: number;
    currencies: {name: string}[];
    region: string;
    languages: {name: string}[];
    subregion: string;
    capital: string;
    alpha3Code: string;
    flag: string;
    borders: string[]; // alpha3Code
}

export const getAllCountries = () => {
    const url = `https://restcountries.com/v2/all`;
    return fetch(url).then(async res => {
        if (res.ok) {
            localStorage.setItem('countries', JSON.stringify(await res.json()))
            return await res.json();
        } else {
            return Promise.reject(res.json());
        }
    });
}