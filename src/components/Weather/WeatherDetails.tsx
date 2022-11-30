import React from 'react'
import { useSelector } from 'react-redux';
import classes from './WeatherDetails.module.css'
import { motion } from 'framer-motion'
import { RootState } from '../../store/store';

const WeatherDetails: React.FC = () => {

    const hourlyWeather = useSelector((state: RootState) => state.city.hourlyWeather)

    const updatedArray = hourlyWeather?.hourly?.slice(0, 6).map((el: any) => {
        const unixTimestamp = el.dt
        const milliseconds = unixTimestamp * 1000
        const dateObject = new Date(milliseconds)
        const humanTimeFormat = (dateObject.getHours() < 10 ? '0' : '') + dateObject.getHours() + ':' + dateObject.getMinutes() + '0'

        return {
            ...el,
            dt: humanTimeFormat,
            id: Math.random()
        }
    })

    return (
        <motion.ul initial={{ x: '100vw' }} animate={{ x: 0 }} className={classes[`weather-details`]} >
            {updatedArray.map((el: any) => {
                return <li className={classes[`weather-details__item`]} key={el.id}>
                    <div>{el.dt}</div>
                    <div>
                        <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt="weather icon" />
                    </div>
                    <div>{el.temp}{' '}°C</div>
                </li>
            })}
        </motion.ul>
    )
}

export default WeatherDetails
