// adding data to the DOM
const countryMapper = (countries => { 
    let countryListItem = document.createElement('li');
    let liText = document.createTextNode (
        `${countries}`
    );
    countryListItem.appendChild(liText);
    return countryListItem;
});


const addCountryToTheDom = (countries) => {
    let countryList = document.getElementById('result-list');
    countryList.querySelectorAll('*').forEach(element => element.remove());
    let countryText = countries.map(countryMapper);
    countryText.forEach(liElement => { 
        countryList.appendChild(liElement);
    });
}; 


// remove duplicates
const unique = (value, index, self) => {
    return self.indexOf(value) === index
};


// function to display list of countries
const getCountryList = () => {
    let countries = [];
    randomPersonData.forEach(element => {
        countries.push(element.region);
    });
    countries.sort();
    const uniqueCountries = countries.filter(unique)
    return uniqueCountries;
};

