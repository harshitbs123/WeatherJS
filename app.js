let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city");
let country = document.querySelector(".country");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let iconic = document.querySelector(".iconic");

let API_KEY = "aca4817c5ddf4badba283717260506";
// let url =
//   "https://api.weatherapi.com/v1/current.json?key=aca4817c5ddf4badba283717260506&q=Delhi,India";

//at start it is this

async function getData(city) {
  try {
    let url = `https://api.weatherapi.com/v1/current.json?key=aca4817c5ddf4badba283717260506&q=${city}`;
    let result = await axios.get(url);
    console.log(result.data);
    temp.textContent = result.data.current.temp_c;
    humidity.textContent = result.data.current.humidity;
    wind.textContent = result.data.current.wind_kph;
    cityName.textContent = result.data.location.name;
    country.textContent = result.data.location.country;

    if (result.data.current.is_day) {
      iconic.classList.remove("fa-cloud-moon");
      iconic.classList.add("fa-cloud-sun");
    } else {
      iconic.classList.remove("fa-cloud-sun");
      iconic.classList.add("fa-cloud-moon");
    }
    let condition = result.data.current.condition.text.toLowerCase();

    // remove all weather icons first
    iconic.classList.remove("fa-cloud-sun", "fa-cloud-moon", "fa-cloud-rain");

    if (condition.includes("rain")) {
      iconic.classList.add("fa-cloud-rain");
    } else if (result.data.current.is_day) {
      iconic.classList.add("fa-cloud-sun");
    } else {
      iconic.classList.add("fa-cloud-moon");
    }
  } catch (error) {
    alert("City not found!");
  }
}
getData("New Delhi,India");
btn.addEventListener("click", () => {
  city = inp.value;
  getData(city);
  inp.value = "";
});
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getData(inp.value);
    inp.value = "";
  }
});
