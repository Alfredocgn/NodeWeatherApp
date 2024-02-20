const { readInput, inquirerMenu, inquirerPause } = require("./helpers/inquirerMenu");
const Search = require("./models/search");




const main = async () => {

  const search = new Search()
  let opt;

  do {
    opt = await inquirerMenu()
    switch(opt){
      case 1:
        const place = await readInput('City: ')
        const cities = await search.city(place)
        search.addHistory(cities.name)
        // console.log(cities)




        console.log('\nCity information\n'.green)
        console.log(`City: ${cities.name}`)
        console.log(`Country: ${cities.country}`)
        console.log(`Lat: ${cities.lat}`)
        console.log(`Long: ${cities.lon}`)
        console.log(`Temp: ${cities.temp}`)
        console.log(`Weather: ${cities.weather}`)
        console.log(`Humidity: ${cities.humidity}`)
        break
      case 2:
        search.history.forEach((place,i)=>{
          const idx = `${i+1}.`.green
          console.log(`${idx} ${place}`)
        })
        break
    }

    if(opt!==0) await inquirerPause()

  }while(opt !== 0)


}

main()