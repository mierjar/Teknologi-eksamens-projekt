let data

function setup(){
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
        console.log(json)
        data = json.badesteder

    json.badesteder.map( badesteder => {
        newMarker(badesteder)
    })
})



const newMarker = (badesteder) => {
    //console.log(badesteder.coordinates)
    var count = Object.keys(badesteder).length;

    //console.log(count)

    for(var i = 0; i < count; i++) {
        var obj = badesteder;

        let coords = obj.coordinates
        let coordsarray = coords.split(',')

        const marker2 = new mapboxgl.Marker()
        marker2.setLngLat(coordsarray)
        marker2.addTo(map)
    }
    
}


function draw(){
    select('.anbefalinger').mouseReleased()
}








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
