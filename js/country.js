const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    // console.log(countries)
    const allCountriesHTML = countries.map(country => getcountryHTML(country))
    // console.log(allCountriesHTML[0])
    const countryContainer = document.getElementById('country-content');
    countryContainer.innerHTML = allCountriesHTML.join(``)
}
const getcountryHTML = country => {
    return `
    <div class=country>
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>`
}
loadCountries()