const temperatur = document.getElementById("suhu");
const angin_html = document.getElementById("angin");
const kota = document.getElementById('kota');
const kondisi = document.getElementById('kondisi');
const citynya = document.getElementById('city');


var city = ''
function getCity(){
    city = citynya.value;
    fetchStatistic();  
}

async function fetchStatistic() {
  const options = {
    method: "GET",
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    // params: { country: String(negara) },
    headers: {
        'X-Api-Key': 'BFUVbSYESaENzA/xns5uJQ==QHbJsmnM6utUDXep'
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const temp = response.data.temp;
      const angin = response.data.wind_speed;
      const cloud = response.data.cloud_pct;

      if(cloud>=5 && cloud <=70){
        kondisi.innerHTML = "Few Clouds";
      }else if(cloud>70){
        kondisi.innerHTML = "Clouds";
      }else{
        kondisi.innerHTML = "Sunny";
      }
      
      kota.textContent = city;
      temperatur.textContent = temp ;
      angin_html.textContent = angin;
      console.log()
    })
    .catch(function (error) {
      console.error(error);
    });
}

