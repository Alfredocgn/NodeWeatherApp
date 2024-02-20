const axios = require('axios')
const API_KEY = '04e99dd0fd354006ab105918242002'
// http://api.weatherapi.com/v1/current.json?key=04e99dd0fd354006ab105918242002&q=London&aqi=no


class Search {

  history = ['Madrid','Oslo','Roma']

  constructor (){

  }

  async city (place = ''){

    try {
      // const instance = axios.create({
      //   URL:`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`,

      // })
      const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`);
      console.log(resp.data)
      
    } catch (error) {
      return []
      
    }


    

  
  }


}


module.exports = Search;