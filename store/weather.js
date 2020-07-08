import moment from 'moment'
export const state = () => ({
  weatherData: [],
})

export const getters = {
  weatherData: (state) => {
    return state.weatherData.map((data) => ({
      id: parseInt(data._venueID),
      name: data._name,
      weatherCondition: data._weatherConditionIcon,
      temp: parseInt(data._weatherTemp),
      lastUpdated: moment.unix(data._weatherLastUpdated).format('LLL'),
    }))
  },
  sortViaTemperature: (state) => {
    return state.weatherData.sort(function (a, b) {
      return a.temp - b.temp
    })
  },
  findLocation: (state) => (id) => {
    const rawLocation = state.weatherData.find((data) => data._venueID === id)
    return {
      id: parseInt(rawLocation._venueID),
      name: rawLocation._name,
      weatherCondition: rawLocation._weatherConditionIcon,
      temp: parseInt(rawLocation._weatherTemp),
      lastUpdated: moment.unix(rawLocation._weatherLastUpdated).format('LLL'),
    }
  },
}

export const mutations = {
  getWeather(state, data) {
    state.weatherData = data
  },
}