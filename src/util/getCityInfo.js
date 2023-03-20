import axios from "axios";

const apiKey = "d0560fd08dc75d146e67e8cf5f8992b7";

const getCityInfo = async (city) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return {
    name: data.name,
    temperature: data.main.temp,
  };
};

export default getCityInfo;
