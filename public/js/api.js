class Forecast {
    constructor(){
        this.key =  "8JbeZlzgZsAkvlz8fTzqRVEyOpBVFOfX";
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updatecity(city) {
        // console.log(city);
        const citydets = await this.getcity(city);
        const weather = await this.getweather(citydets.Key);
        return { citydets, weather };
    }
    async getcity(city){

        const query = `?apikey=${this.key}&q=${city}`
        console.log(city, this.cityURI + query);
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getweather(id){

        const query = `${id}?apikey=${this.key}`;
    
        console.log(this.weatherURI + query);
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    
    }
}

// const key = "8JbeZlzgZsAkvlz8fTzqRVEyOpBVFOfX";
// // console.log('moshi moshi');

// const getweather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     console.log(base + query);

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// }

// const getcity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`
//     console.log(city, base + query);
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }




