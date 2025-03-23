const weatherData = [
  {
    city: "Hà Nội",
    temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️",
  },
  {
    city: "Hồ Chí Minh",
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️",
  },
  {
    city: "Đà Nẵng",
    temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️",
  },
];

const btnElement = document.querySelector("#btn-search");
const errorElement = document.querySelector("#error");
const cardContainer = document.querySelector(".card-container");

btnElement.addEventListener("click", function () {
  const searchValue = document.querySelector("#search-bar").value.toLowerCase();
  const filterCard = weatherData.find(
    (item) => item.city.toLowerCase() === searchValue
  );
  if (filterCard) {
    cardContainer.style.display = "block";
    errorElement.style.display = "none";
    cardContainer.innerHTML = "";

    // Card name
    const cityName = document.createElement("div");
    cityName.classList.add("card-name");
    cityName.textContent = filterCard.city;

    // Tạo card content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    // Card icon
    const weatherIcon = document.createElement("div");
    weatherIcon.classList.add("icon");
    weatherIcon.textContent = filterCard.icon;
    // Card tempurature
    const temperature = document.createElement("div");
    temperature.classList.add("tempurature");
    temperature.textContent = `${filterCard.temperature}°C`;

    // Card info
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("info");
    // Info - description
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = filterCard.description;
    // Info - humidity
    const humidity = document.createElement("div");
    humidity.classList.add("humidity");
    humidity.textContent = `Độ ẩm: ${filterCard.humidity}%`;
    // Info - windSpeed
    const windSpeed = document.createElement("div");
    windSpeed.classList.add("windSpeed");
    windSpeed.textContent = `Tốc độ gió: ${filterCard.windSpeed} km/h`;

    // Thêm các thuộc tính vào Info
    cardInfo.appendChild(description);
    cardInfo.appendChild(humidity);
    cardInfo.appendChild(windSpeed);

    // Thêm các thuộc tính vào content
    cardContent.appendChild(weatherIcon);
    cardContent.appendChild(temperature);
    cardContent.appendChild(cardInfo);

    // Thêm các thuộc tính vào card
    cardContainer.appendChild(cityName);
    cardContainer.appendChild(cardContent);

  } else {
    errorElement.style.display = "block";
    cardContainer.style.display = "none";
  }
});
