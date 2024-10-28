import React, { useEffect } from "react";
import './Forecast.css'
import {Images} from "./Images";

export default function Forecast({ data }) {
    console.log("From Forecast", data)

    useEffect(() => {
        
        const foreCastList = document.getElementById("foreCastList");
        let count = 0;
        
        foreCastList.innerHTML = '';
        data.map((x) => {
            console.log(x);
            const condition = x.conditions.split(',');
            if (count < 7) {
                count++;
                foreCastList.innerHTML += `
                <div class="date">
                <h3>${x.datetime}</h3>
                <div class="forecastTemp">
                <img src=${Images[condition[0]]} alt=${condition} />
                <p>${x.temp} C</p>
                </div>
                <div class="forecastHumidity">
                <img src=${Images['Humidity']} alt="" />
                <p>${x.humidity}%</p>
                </div>
                <div class="forecastWindSpeed">
                <img src=${Images["WindSpeed"]} alt="" />
                <p>${x.windspeed} Km/h</p>
                </div>
                </div>
                `;
            }
        })
    }, [data])
    
    return (
        <section id="section">
            <hr />
            <h2>Forecast</h2>
            <hr />            
            <div id="foreCastList">
            </div>    
        </section>
    );
}