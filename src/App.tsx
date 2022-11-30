import { useEffect } from 'react'
import Layout from './components/UI/Layout';
import UserSearch from "./components/User/UserSearch";
import Weather from './components/Weather/Weather';
import WeatherDetails from './components/Weather/WeatherDetails';
import DailyWeather from './components/Weather/DailyWeather';
import { useSelector, useDispatch } from 'react-redux';
import { actionsfetchDataHandler } from './store/actions'
import { uiActions } from './store/uiSlice'
import Notification from './components/UI/Notification';
import Loading from './components/UI/Loading';
import TodayInfo from './components/Weather/TodayInfo';
import OtherDetails from './components/Weather/OtherDetails';
import { RootState } from './store/store';

// "homepage": "https://mancun07.github.io/weather-app",

function App() {

  const dispatch = useDispatch()
  const weather = useSelector((state: RootState) => state.city.weather)
  const hourlyWeather = useSelector((state: RootState) => state.city.hourlyWeather)
  const dailyWeather = useSelector((state: RootState) => state.city.dailyWeather)
  const notification = useSelector((state: RootState) => state.ui.notification)
  const loading = useSelector((state: RootState) => state.ui.loading)

  useEffect(() => {
    dispatch(actionsfetchDataHandler('Санкт-Петербург'))
  }, [dispatch])


  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(uiActions.clearNotification())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, notification])

  return (
    <Layout>
      {loading && <Loading />}
      {!loading && notification && <Notification message={notification.message} />}
      {!loading && weather && <Weather />}
      {!loading && hourlyWeather && <WeatherDetails />}
      <UserSearch />
      {!loading && dailyWeather && <DailyWeather />}
      {!loading && weather && <TodayInfo />}
      {!loading && weather && <OtherDetails />}
    </Layout>
  );
}

export default App;
