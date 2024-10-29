import Clear from "../assets/images/clear.png";
import Clouds from "../assets/images/clouds.png";
import Drizzle from "../assets/images/drizzle.png";
import Humidity from "../assets/images/humidity.png";
import Mist from "../assets/images/mist.png";
import Rain from "../assets/images/rain.png";
import Snow from "../assets/images/snow.png";
import WindSpeed from "../assets/images/wind.png";

export const Images = {
    'Clear': Clear,
    'Clouds': Clouds,
    'Cloudy': Clouds,
    ["Partially cloudy"]: Clouds,
    'Overcast':Clouds,
    'Drizzle': Drizzle,
    'Humidity': Humidity,
    'Mist': Mist,
    'Rain':Rain,
    'Snow':Snow,
    'WindSpeed':WindSpeed
};

const getWeatherImage = (condition) => {
    Images[condition] || Images.Clear;
}


export default getWeatherImage;
