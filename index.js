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
        await search.city(place)




        console.log('\nCity information\n'.green)
        console.log('City:')
        console.log('Lat:')
        console.log('Long:')
        console.log('Temp:')
        console.log('Min:')
        console.log('Max:')
        break
      case 2:
        console.log('this is option 2')
        break
    }

    if(opt!==0) await inquirerPause()

  }while(opt !== 0)


}

main()