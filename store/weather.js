import moment from 'moment'
import sortby from 'lodash.sortby'
export const state = () => ({
  weatherData: [],
  temperatureLevel: [],
  alphabetical: [],
  serverLastUpdated: [],
})

export const getters = {
  weatherData: (state) => {
    return state.weatherData.map((data) => ({
      id: parseInt(data._venueID),
      suburb: data._name,
      weatherCondition: data._weatherCondition,
      weatherIcon: data._weatherConditionIcon,
      temp: data._weatherTemp === undefined ? 0 : parseInt(data._weatherTemp),
      lastUpdated: moment.unix(data._weatherLastUpdated).format('LLL'),
      country: data._country._name,
    }))
  },
  temperatureLevels: (state) => {
    return state.temperatureLevel
  },
  alphabeticalOrder: (state) => {
    return state.alphabetical
  },
  mostRecentServerUpdate: (state) => {
    return state.serverLastUpdated
  },

  findLocation: (state) => (id) => {
    const rawLocation = state.weatherData.find((data) => data._venueID === id)
    return {
      suburb: rawLocation._name,
      weatherCondition: rawLocation._weatherConditionIcon,
      temp: parseInt(rawLocation._weatherTemp),
      feelsLike: parseInt(rawLocation._weatherFeelsLike),
      lastUpdated: moment.unix(rawLocation._weatherLastUpdated).format('LLL'),
    }
  },
}

export const mutations = {
  getWeather(state, data) {
    const dataTransformation = data.map((data) => ({
      id: parseInt(data._venueID),
      name: data._name,
      weatherCondition: data._weatherCondition,
      weatherIcon: data._weatherConditionIcon,
      temp: data._weatherTemp === undefined ? 0 : parseInt(data._weatherTemp),
      lastUpdated:
        data._weatherLastUpdated === undefined
          ? moment(0).format('LLL')
          : moment.unix(data._weatherLastUpdated).format('LLL'),
    }))
    state.weatherData = data
    state.alphabetical = dataTransformation
  },
  sortAlphabetically(state) {
    const temporaryData = state.alphabetical
    state.alphabetical = temporaryData.sort((a, b) => {
      if (a._name < b._name) {
        return -1
      }
      if (a._name > b._name) {
        return 1
      }
      return 0
    })
  },
  sortTemperature(state, data) {
    state.temperatureLevel = data
      .map((data) => ({
        id: parseInt(data._venueID),
        name: data._name,
        weatherCondition: data._weatherCondition,
        weatherIcon: data._weatherConditionIcon,
        temp: data._weatherTemp === undefined ? 0 : parseInt(data._weatherTemp),
        lastUpdated:
          data._weatherLastUpdated === undefined
            ? moment(0).format('LLL')
            : moment.unix(data._weatherLastUpdated).format('LLL'),
      }))
      .sort((a, b) => b.temp - a.temp)
  },
  sortByDate(state, data) {
    const dateSort = sortby(data, function (o) {
      return moment(o._weatherLastUpdated)
    }).map((data) => ({
      id: parseInt(data._venueID),
      name: data._name,
      weatherCondition: data._weatherCondition,
      weatherIcon: data._weatherConditionIcon,
      temp: data._weatherTemp === undefined ? 0 : parseInt(data._weatherTemp),
      lastUpdated:
        data._weatherLastUpdated === undefined
          ? moment(0).format('LLL')
          : moment.unix(data._weatherLastUpdated).format('LLL'),
    }))
    state.serverLastUpdated = dateSort
  },
}
