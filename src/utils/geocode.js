const request = require('request');

const geocode= (address,callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5raXRvbmZpcmUiLCJhIjoiY2wwY3BxbjZsMDFkcjNicHNrbzhxZ3ZjOCJ9.I7OqEexA5QwC6GAIPzKdPg&limit=1';
    
    request({url, json : true},(error,{body}) =>{
        if(error)
        {
            callback('Unable to connect to the sever',undefined);
        }
        else if(body.features.length===0)
        {
            callback('Error getting the location plz enter a valid location',undefined);
        }
        else{
            callback(undefined,{
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name
            });
        }
    });

}
module.exports = geocode;