const fs = require('fs')
const axios = require('axios')
const API_KEY = '04e99dd0fd354006ab105918242002'

// http://api.weatherapi.com/v1/current.json?key=04e99dd0fd354006ab105918242002&q=London&aqi=no


class Search {

  history = []
  dbPath = './db/database.json'

  constructor (){
    this.readDb()

  }

  async city (place = ''){

    try {
      // const instance = axios.create({
      //   URL:`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`,

      // })
      const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`);
      if (!resp.data.location || !resp.data.current) {
        console.log('City not found');
        return null; 
      }
      const info = {
        name: resp.data.location.name,
        country: resp.data.location.country,
        lat:resp.data.location.lat,
        lon:resp.data.location.lon,
        weather: resp.data.current.condition.text,
        temp: resp.data.current.temp_c,
        humidity: resp.data.current.humidity,
      }
      return info
      
    } catch (error) {
        console.log('Error')
      
      
    }


    

  
  }

  addHistory(place=''){

    if(this.history.includes(place.toLocaleLowerCase())){
      return
    }
    this.history.unshift(place.toLocaleLowerCase());
    this.saveDb()

  }

  saveDb(){
    const payload = {
      history:this.history
    }
    fs.writeFileSync(this.dbPath,JSON.stringify(payload))


  }

  readDb(){
    if(!fs.existsSync(this.dbPath)){
      return
    }

    const info = fs.readFileSync(this.dbPath,{encoding:'utf-8'})
    const data = JSON.parse(info)

    this.history = data.history


  }


}


module.exports = Search;