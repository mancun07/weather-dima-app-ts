import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import classes from './OtherDetails.module.css'
import { RootState } from '../../store/store';

const OtherDetails: React.FC = () => {

    const weather = useSelector((state: RootState) => state.city.weather)

    return (
        <Fragment>
            <div>
                <div className={classes.title}>Восход солнца</div>
                <div>{weather.sys.sunrise}</div>
                <hr />
            </div>
            <div>
                <div className={classes.title}>Заход солнца</div>
                <div>{weather.sys.sunset}</div>
                <hr />
            </div>
            <div>
                <div className={classes.title}>Влажность</div>
                <div>{weather.main.humidity} %</div>
                <hr />
            </div>
            <div>
                <div className={classes.title}>Ветер</div>
                <div>{weather.wind.speed} м/c</div>
                <hr />
            </div>
            <div>
                <div className={classes.title}>Ощущается как</div>
                <div>{weather.main.feels_like} °C</div>
                <hr />
            </div>
            <div>
                <div className={classes.title}>Видимость</div>
                <div>{weather.visibility} км</div>
                <hr />
            </div>
        </Fragment>
    )
}

export default OtherDetails
