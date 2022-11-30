import {cityActions} from './citySlice'
import {uiActions} from './uiSlice'
import { AppDispatch } from './store'

const key = process.env.REACT_APP_VALUE

export const actionsfetchDataHandler = (userValue: string) => {
    return async (dispatch: any) => {
        const fetchDataHandler = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userValue}&appid=${key}&lang=ru`)
          // if (!response.ok) {
          //   throw new Error({message: 'There is a server error'})
          // }
          const data = await response.json()
          dispatch(cityActions.addWeather(data))
          return data
          }

          const fetch2DataHandler = async (data: any) => { 
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=daily&lang=ru&appid=${key}`)
            // if (!response.ok) {
            //   throw new Error({message: 'There is a server error'})
            // }
            const data2 = await response.json()
            dispatch(cityActions.addHourlyWeather(data2))
            return data2
          }

          const fetch3DataHandler = async (data: any) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=${key}&lang=ru`)
            // if (!response.ok) {
            //   throw new Error({message: 'There is a server error'})
            // }
            const data3 = await response.json()
            dispatch(cityActions.addDailyWeather(data3))
            return data3
          }

      
      try {
        dispatch(uiActions.setLoading(true))
        const data = await fetchDataHandler()
        await fetch2DataHandler(data)
        await fetch3DataHandler(data)
      } catch (error) {
        dispatch(uiActions.showNotification({
          message:'Некорректный ввод! Такого города нет...'
        }))  
      }
            dispatch(uiActions.setLoading(false))


    // just another option below of using then/catch

      // dispatch(uiActions.setLoading(true))
      // fetchDataHandler()
      // .then(data => fetchWeatherHandler(data))
      // .catch(err => {
      //   dispatch(uiActions.showNotification({
      //     message:'Некорректный ввод! Такого города нет!'
      //   }))  
      // })
      // dispatch(uiActions.setLoading(false))
  
    }
}






