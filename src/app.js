const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const  app = express();
const port = process.env.PORT || 3000;

//PATH
const pathtopublic = path.join(__dirname,'../public');
const pathviews = path.join(__dirname,'../template/views');
const pathpartials = path.join(__dirname,'../template/partials');

//setting the express
hbs.registerPartials(pathpartials);
app.set('view engine','hbs');
app.set('views',pathviews);
//loadinbg the static pages
app.use(express.static(pathtopublic));

app.get('',(req,res) => {
    res.render('index',{
        name: 'Ankit',
        title:'Weather'
    });
})
app.get('/help',(req,res) => {
    res.render('help',{
        name: 'Ankit',
        title:'Help'
    });
})

app.get('/about',(req,res) => {
    res.render('about',{
        name: 'Ankit',
        title:'About'
    });
})

app.get('/weather',(req,res) => {
    if(!req.query.location)
    {
        return res.send({
            error : "Enter the value of the location"
        })
    }
    geocode(req.query.location,(error,{location} = {})=>{
        if(error)
        {
            return res.send({
                error
            });
        }
            console.log(location);
            forecast(location, (error, forecastdata) => {
                if(error)
                {
                    return res.send({
                        error
                    });
                }
                     res.send(forecastdata)
              });
        
    });
})

app.get('*',(req,res)=> {
    res.send('Sorry no such page was found');
})

app.listen(port,() => {
    console.log('server  is ip on part' + port + ' .');
})