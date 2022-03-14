const request = require('request');
 
const forecast= (address,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8ce402cd32fc8836c73c8e82dd953a2&query='+encodeURIComponent(address)+'&units=m';
    
    request({url , json : true},(error,{body}) =>{
        if(error)
        {
            callback('Unable to connect to the sever',undefined);
        }
        else if(body.error)
        {
            callback('error in between ',undefined);
        }
        else{
            const current = body.current;
            callback(undefined,{
                address,
                temperature: current.temperature,
                feelslike:current.feelslike});
        }
    });

}
module.exports = forecast;

