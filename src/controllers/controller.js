    /*  interact with the views, logic */
 
const axios = require("axios")
const API_KEY = "b96ca2aabc805bedc4fe22612c07bfb1"

const Weather = require("../model/Weather")

exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) =>{
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    

    const weather = new Weather(req.body.city)
    weather.validateUserInput()
    
 /* will not make an api call unless there are no errors */
    
    if(weather.errors.length){
        res.render("index", {
            error: weather.errors.toString()
        })
    } else {
        axios.get(url).then((response) => {
            const { temp: temperature } = response.data.main
            const { name: location } = response.data
            res.render("index", {
                weather: `It is currently ${temperature} °C in ${location}. `
            })
        }).catch((error) => {
            console.log(error)
        })
    }  
}

    exports.renderAboutPage = (req, res) => {
        res.render("About")
    }
