import React, { useEffect, useState } from "react";
import "./WeatherInfo.css";
import {Images} from "./Images";

export default function WeatherInfo(props) {

    const ApiKey = "YFYWQQDB7KJMRLC6ECYRPRCU8";

    const [main, setMain] = useState([]);

    useEffect(
        () => {
            async function fetchAPI() {
                try {
                    // Fetch Form API
                    const res = await fetch(
                        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.place}/?unitGroup=metric&key=${ApiKey}`
                    );
                    const data = await res.json();

                    // Sending Forecast Data array to App to use for Forecast 
                    data.days.map((x) => props.setData((prev) => [...prev,x]));
                    
                    // Weather Condition
                    const condition = data.days[0].conditions.split(",");

                    // Setting Data to Main
                    setMain((prev) => [
                      <main>
                        <img
                          className="tempimage"
                          src={Images[condition[0]]}
                          alt={condition}
                        />
                        <p className="temp">
                          {data.days[0].temp}
                          <sup>o</sup>C
                        </p>
                        <p className="cityName">{data.address}</p>
                        <div className="stats">
                          <div className="humidity">
                            <img src={Images["Humidity"]} alt="Humidity" />
                            <div className="info">
                              <p>{data.days[0].humidity}%</p>
                              <p>Humidity</p>
                            </div>
                          </div>
                          <div className="wind">
                            <img src={Images["WindSpeed"]} alt="wind speed" />
                            <div className="info">
                              <p>{data.days[0].windspeed} KM/H</p>
                              <p>Wind</p>
                            </div>
                          </div>
                        </div>
                      </main>,
                    ]);
                } catch (error) {
                    alert("Please Enter a valid city")
                    props.setPlace(prev => prev)
                    console.log(error);
                }
            }
            fetchAPI()
            console.log("From Fetch API", main)
        },[props.place])

    return (
        <>
            {main}
        </>
    );
}