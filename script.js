mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXdpdGhha2t5IiwiYSI6ImNraGN1a3lwZzAxMXgzMnF5bWJnbm9xd3EifQ.ObDfRAeinqSzQVjxJaDqfw';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy:true });

function successLocation(position){
    settingMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    settingMap([77.22, 28.72])
}

function settingMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
      });
      map.addControl(directions, 'top-left');
}

