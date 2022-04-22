let data
let anbefalingBtn, narmesteBtn
let button1, button2, button3

function setup(){
    noCanvas()
    //referencer til html
    anbefalingBtn = select('#anbefaling_btn')
    button1 = select('#button1')
    button2 = select('#button2')
    button3 = select('#button3')
    //html_interaktion

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiYXRyb3NzZGsiLCJhIjoiY2wyN2NlcWVlMDB1MzNscWhicTh6ZWh2aCJ9.dUMy9S_emcOhW4OHrqONQg';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [12.568759518980915, 55.66447035003021], // starting position [lng, lat]
        zoom: 10 // starting zoom
    })

    /*const marker1 = new mapboxgl.Marker()
    marker1.setLngLat([12.554729, 55.70651])
    marker1.addTo(map)*/


    
    fetch('./index.json')
    //get response object parse to json()
    .then( res => res.json() )
    //when parse done, json object as variable.
    .then( json => {
        //console.log(json)
        data = json.badesteder

    json.badesteder.map( badesteder => {
        newMarker(badesteder)
        newCard(badesteder)
    })
})


const newMarker = (badested) => {
    
    let coords = badested.coordinates
    let coordsarray = coords.split(',')
    console.log(coordsarray)
    const marker = new mapboxgl.Marker()
    marker.setLngLat([coordsarray[1],coordsarray[0]])
    marker.addTo(map)

    marker.getElement().addEventListener('click', () => {
        alert(badested.name);
      })

}

const newCard = (badesteder) => {

    //main card structure
    let card = createDiv('')
    let heading = createElement('h2')
    let indhold = createDiv('')

    card.addClass('card')
    heading.addClass('heading')


    //renlighed
    let progressholder = createDiv('')
    let progress = createDiv('')

    progressholder.addClass('progressholder')
    progress.addClass('progress')

    progress.style('width', badesteder.renlighed+'%')
    
    progressholder.child(progress)
    indhold.child(progressholder)


    //mennesker
    let progressholder1 = createDiv('')
    let progress1 = createDiv('')

    progressholder1.addClass('progressholder')
    progress1.addClass('progress')

    progress1.style('width', badesteder.mennesker+'%')
    
    progressholder1.child(progress1)
    indhold.child(progressholder1)


    //indhold
    heading.html(badesteder.name)
    card.child(heading)
    card.child(indhold)


    cardholder = select('.cardholder')
    cardholder.child(card)
}


/*function draw(){
    select('.anbefalinger').mouseReleased()
}*/










/*
fetch('./index.json')
//get response object parse to json()
.then( res => res.json() )
//when parse done, json object as variable.
.then( json => {
    console.log(json)
    data = json.events

    json.events.map( events => {
        newCard(events)
    })
})
}

function draw(){
    document.querySelector('#input').addEventListener('input', ()=>{
        let q = document.querySelector('#input').value
    
        let result = data.filter( events => 
        events.name.includes(q) 
        || events.maalgruppe.join(' ').includes(q) )
        document.querySelector('main').innerHTML = ''
        result.map( event => newCard(event) )
    })
}

function createCard(){
*/

}
