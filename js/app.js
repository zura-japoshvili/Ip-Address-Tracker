const ip_address = document.querySelector(".ip-address");
const loc = document.querySelector(".location");
const time_zone = document.querySelector(".time-zone");
const isp = document.querySelector(".isp");

const submit = document.querySelector(".submit");
const search_input = document.querySelector(".search-input");
const invalid = document.querySelector(".invalid");


async function getData(value){
    const API = `https://geo.ipify.org/api/v1?apiKey=at_yONHSisr0LwNLChGN1nEe50pslPPn&ipAddress=${value}`;
    const response = await fetch(API);

    if(response.status === 200){
        const data = await response.json();
        setData(data);
    }
    if(response.status === 422){
        invalid.textContent = "Invalid Ip ADdress";
    }
}

submit.addEventListener("click", function(){
    getData(search_input.value)
});

function setData(data){
    ip_address.textContent = data.ip;
    loc.textContent = data.location.region;
    time_zone.textContent = data.location.timezone;
    isp.textContent =  data.isp;
    const Data = data;
    initMap();
}

// function initMap(data) {
//     console.log(data);
//   // The location of Uluru
//   const uluru = { lat: `${data.location.lat}`, lng: `${data.location.lng}`};
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}