const getWeather = (city)=>{
cityName.innerHTML = city
async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c3d233aad8mshff1b5f0bdc204f1p115ac8jsnbfc0fe1b7ce8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the response as JSON
      console.log(result);
  
      // Assign the values to HTML elements
      document.getElementById('cloud_pct').textContent = result.cloud_pct;
      document.getElementById('temp').textContent = result.temp;
      document.getElementById('temp2').textContent = result.temp;
      document.getElementById('feels_like').textContent = result.feels_like;
      document.getElementById('humidity').textContent = result.humidity;
      document.getElementById('humidity2').textContent = result.humidity;
      document.getElementById('min_temp').textContent = result.min_temp;
      document.getElementById('max_temp').textContent = result.max_temp;
      document.getElementById('wind_speed').textContent = result.wind_speed;
      document.getElementById('wind_speed2').textContent = result.wind_speed;
      document.getElementById('wind_degrees').textContent = result.wind_degrees;
      document.getElementById('sunrise').textContent = result.sunrise;
      document.getElementById('sunset').textContent = result.sunset;
      // document.getElementById('shanghai_temp').textContent = result.shanghai.temp;
      document.getElementById('shanghai_cloud_pct').textContent = result.cloud_pct;
      document.getElementById('shanghai_temp').textContent = result.temp;
      document.getElementById('shanghai_feels_like').textContent = result.feels_like;
      document.getElementById('shanghai_humidity').textContent = result.humidity;
      document.getElementById('shanghai_min_temp').textContent = result.min_temp;
      document.getElementById('shanghai_max_temp').textContent = result.max_temp;
      document.getElementById('shanghai_wind_speed').textContent = result.wind_speed;
      document.getElementById('shanghai_wind_degrees').textContent = result.wind_degrees;
      document.getElementById('shanghai_sunrise').textContent = result.sunrise;
      document.getElementById('shanghai_sunset').textContent = result.sunset;


      document.getElementById('boston_cloud_pct').textContent = result.cloud_pct;
      document.getElementById('boston_temp').textContent = result.temp;
      document.getElementById('boston_feels_like').textContent = result.feels_like;
      document.getElementById('boston_humidity').textContent = result.humidity;
      document.getElementById('boston_min_temp').textContent = result.min_temp;
      document.getElementById('boston_max_temp').textContent = result.max_temp;
      document.getElementById('boston_wind_speed').textContent = result.wind_speed;
      document.getElementById('boston_wind_degrees').textContent = result.wind_degrees;
      document.getElementById('boston_sunrise').textContent = result.sunrise;
      document.getElementById('boston_sunset').textContent = result.sunset;


      document.getElementById('lucknow_cloud_pct').textContent = result.cloud_pct;
      document.getElementById('lucknow_temp').textContent = result.temp;
      document.getElementById('lucknow_feels_like').textContent = result.feels_like;
      document.getElementById('lucknow_humidity').textContent = result.humidity;
      document.getElementById('lucknow_min_temp').textContent = result.min_temp;
      document.getElementById('lucknow_max_temp').textContent = result.max_temp;
      document.getElementById('lucknow_wind_speed').textContent = result.wind_speed;
      document.getElementById('lucknow_wind_degrees').textContent = result.wind_degrees;
      document.getElementById('lucknow_sunrise').textContent = result.sunrise;
      document.getElementById('lucknow_sunset').textContent = result.sunset;


      document.getElementById('kolkata_cloud_pct').textContent = result.cloud_pct;
      document.getElementById('kolkata_temp').textContent = result.temp;
      document.getElementById('kolkata_feels_like').textContent = result.feels_like;
      document.getElementById('kolkata_humidity').textContent = result.humidity;
      document.getElementById('kolkata_min_temp').textContent = result.min_temp;
      document.getElementById('kolkata_max_temp').textContent = result.max_temp;
      document.getElementById('kolkata_wind_speed').textContent = result.wind_speed;
      document.getElementById('kolkata_wind_degrees').textContent = result.wind_degrees;
      document.getElementById('kolkata_sunrise').textContent = result.sunrise;
      document.getElementById('kolkata_sunset').textContent = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
}
submit.addEventListener("click", (e)=>{
  const cityInput = document.getElementById("city").value;
  e.preventDefault()
  getWeather(cityInput)
})

getWeather("Delhi")