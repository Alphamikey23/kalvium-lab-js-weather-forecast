//Complete the Weather API Backend part using openweathermap api
api = "1c6c050ee516f16429cda0c78dcaded5"

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.



//fetch(api.openweathermap.org/data/2.5/forecast/daily?lat=12.8495319&lon=12.8495319&cnt=1&appid=ac603349975a43f4c4652043285c2ef1)


async function weather() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=chennai,in&APPID=ac603349975a43f4c4652043285c2ef1");
    const temperature = await response.json();
    return temperature;
    
    

  }
  
weather();
  document.getElementById("city").innerHTML = temperature.name;
  document.getElementById("country").innerHTML = temperature.sys.country;



//



