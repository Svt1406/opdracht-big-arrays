// adding data to the dom 
const zodiacMapper = (person => { 
    let zodiacListItem = document.createElement('li');
    let zodiacImage = document.createElement('img');
    zodiacImage.classList.add('img-center')
    zodiacImage.src = person.photo;
    zodiacListItem.appendChild(zodiacImage);
    let liText = document.createTextNode (
        `Name: ${person.name}
        Lastname: ${person.surname}`
    );
    zodiacListItem.appendChild(liText);
    return zodiacListItem;
});

const addPersonToTheDom = (person) => { 
    let zodiacList = document.getElementById('result-list');
    zodiacList.querySelectorAll('*').forEach(element => element.remove());
    let zodiacText = person.map(zodiacMapper);
    zodiacText.forEach(liElement => { 
        zodiacList.appendChild(liElement);      
    });
};

//determine zodiac sign
const getStarSign = (month, day) => {
    if (month === 1 && day <= 20) return "CAPRICORN";
    if (month === 1 && day >= 21) return "AQUARIUS";
    if (month === 2 && day <= 19) return "AQUARIUS";
    if (month === 2 && day >= 20) return "PISCES";
    if (month === 3 && day <= 20) return "PISCES";
    if (month === 3 && day >= 21) return "ARIES";
    if (month === 4 && day <= 20) return "ARIES";
    if (month === 4 && day >= 21) return "TAURUS";
    if (month === 5 && day <= 20) return "TAURUS";
    if (month === 5 && day >= 21) return "GEMINI";
    if (month === 6 && day <= 21) return "GEMINI";
    if (month === 6 && day >= 22) return "CANCER";
    if (month === 7 && day <= 22) return "CANCER";
    if (month === 7 && day >= 23) return "LEO";
    if (month === 8 && day <= 23) return "LEO";
    if (month === 8 && day >= 24) return "VIRGO";
    if (month === 9 && day <= 21) return "VIRGO";
    if (month === 9 && day >= 22) return "LIBRA";
    if (month === 10 && day <= 22) return "LIBRA";
    if (month === 10 && day >= 23) return "SCORPIO";
    if (month === 11 && day <= 21) return "SCORPIO";
    if (month === 11 && day >= 22) return "SAGGITARIUS";
    if (month === 12 && day <= 21) return "SAGGITARIUS";
    if (month === 12 && day >= 22) return "CAPRICORN";
  };


const addStarSign = person => {
    const month = parseInt(person.birthday.split("/")[1]); 
    const day = parseInt(person.birthday.split("/")[0]);
    person.zodiac = getStarSign(month, day);
    return person;
  };
  

const getZodiacSign = (person) => { 
    person = addStarSign(person);
    return person.zodiac;
};


// filter to get gender
const filterGender = (element) => {
    return element.gender === "female";
};

// filter to get age
const filterAge = (element) => { 
    return element.age > 30;
};


// filter to get the zodiac sign
const filterZodiac = (element) => { 
    return getZodiacSign(element) === "CAPRICORN";
};


const sortByName = (person1, person2) => {
    return sort_helper(person1.name > person2.name);
};


// function to display list of Capricorn woman
const getCapricornList = () => { 
    let nameList = [];
    randomPersonData.forEach(element => {
        let person = { 
            name: element.name,
            surname: element.surname,
            photo: element.photo,
            gender: element.gender,
            age: element.age,
            birthday: element.birthday.dmy,
            zodiac: ''
        };
        nameList.push(person);
    });
        const listOfWoman = nameList.filter(filterGender);
        const ageWomanList = listOfWoman.filter(filterAge);
        const zodiacSignList = ageWomanList.filter(filterZodiac);        // console.log(uniqueCapricorn);
        zodiacSignList.sort(sortByName);
        return zodiacSignList;
};