const API_KEY = "cc9c0da84414b63180ddb60124f35c11";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lng=${lng}&appid=${API_KEY}`
        );
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//success
function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude; 
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

//error
function handleGeoError(position){
    console.log('caanot access weather;;');
}

function askForCoords(){
    //첫번째 인자 : 성공시 함수, 두번째 인자 : 실패시 함수
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    //좌표가 없다면 
    if(loadedCoords === null){
        askForCoords();
        console.log(loadedCoords);
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();