import React from 'react'
import { useSelector } from 'react-redux';
import classes from './TodayInfo.module.css'
import { RootState } from '../../store/store';

const TodayInfo: React.FC = () => {

    const weather = useSelector((state: RootState) => state.city.weather)

    return (
        <div className={classes[`today-info`]}>
            <p>Сегодня: cейчас {weather.weather[0].description}.
                Teмпература воздуха {weather.main.temp} °C.
                Ожидаемая максимальная температура воздуха сегодня {weather.main.temp_max} °C.
            </p>
        </div>
    )
}

export default TodayInfo
