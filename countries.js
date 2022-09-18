const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const countriesDiv = document.getElementById('countries');

const displayCountries = countries =>{
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h2>  ${country.name} </h2>
                          <h4>  ${country.capital}</h4>
                          <button onclick="loadCountryByName('${country.name}')">Details</button>`;        

       countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));

}

const displayCountryDetails = country =>{
    console.log(country);
    const countryDetailsDiv = document.getElementById('country-details');
    countryDetailsDiv.innerHTML =`
                                 <h3>${country.name}</h3>
                                 <h3>Population: ${country.population}</h3>
                                 <img width="200px" src="${country.flag}">                            
    `
}