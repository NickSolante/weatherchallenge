// I used vuex to try and consolidate state as much as possible

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
      // there were fields that did not have any key or value at all so I had to give them a default value
      temp: data._weatherTemp === undefined ? 0 : parseInt(data._weatherTemp),
      lastUpdated:
        data._weatherLastUpdated === undefined
          ? moment(0).format('LLL')
          : moment.unix(data._weatherLastUpdated).format('LLL'),
    }))

    // only alphabetical was called here because when I called serverlastupdated and temperature
    // a bug occured where all three states below weatherData turned out to be the same even when sorting
    // I was trying to keep it DRY as possible but was unsuccessful

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
  // due to the bug I could not solve the below code has a lot of repetition and is very verbose
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
