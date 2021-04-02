let map
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7891, lng: -73.135},
        zoom: 3,
    });
   
}
