const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeimg = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

console.log(timeimg);
const updateui = (data) => {

    //destructure properties
    const { citydets, weather } = data;
    //similar to the
    //const citydets = data.citydets;
    //cosnt weather = data.weather;

    details.innerHTML = `
    <h5 class="my-3">${citydets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    let timesrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
    timeimg.setAttribute('src', timesrc);

    const numbericon = weather.WeatherIcon;
    const iconsrc = `img/icons/${numbericon}.svg`;
    icon.setAttribute('src', iconsrc);
}

// const updatecity = async (city) => {
//     // console.log(city);
//     const citydets = await getcity(city);
//     const weather = await getweather(citydets.Key);

//     return { citydets, weather };
// }

cityform.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const city = cityform.city.value.trim();
    cityform.reset();

    //update ui with city
    forecast.updatecity(city)
        .then(data => updateui(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    forecast.updatecity(localStorage.getItem('city'))
        .then(data => updateui(data))
        .catch(er => console.log(er));
}