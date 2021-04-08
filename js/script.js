// sort helper!
const sort_helper = result => { 
    if (result) { 
        return 1;
    } else { 
        return -1;
    }
};


// looping through al the filters buttons and adding an event 
const addEventListeners = () =>  {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleOnChangeEvent);
    });
};


// adding the filter function to every button
const handleOnChangeEvent = event => {
    let btnValue = event.target.value;
    let filterData = [];
    switch (btnValue){
        case ('List of countries'):
            filterData = getCountryList();
            addCountryToTheDom(filterData);
        break;
        case ('Capricorn woman'):
            filterData = getCapricornList();
            addPersonToTheDom(filterData);
        break;
        case ('Old creditcards'):
            console.log('Old creditcards');
        break;
        case ('Most people'):
            console.log('Most people');
        break;
        case ('Average age'):
            console.log('Average age');
        break;
        case ('Match making'):
            console.log('Match making');
        break;
    }
};


addEventListeners();
