<template>
  <div class="container">
    <div>
      <h1 class="title">
        Weather App
      </h1>
      <div>
        <b-tabs content-class="mt-3" align="center">
          <b-tab title="Alphabetical" active
            ><b-row>
              <Table
                v-for="weather in alphabeticalOrder"
                :id="weather.id"
                :key="weather.id"
                :name="weather.name"
                :condition="weather.weatherCondition"
                :icon="weather.weatherIcon"
                :temp="weather.temp"
                :updated="weather.lastUpdated"
              /> </b-row
          ></b-tab>
          <b-tab title="Temperature"
            ><b-row>
              <Table
                v-for="weather in temperatureLevels"
                :id="weather.id"
                :key="weather.id"
                :name="weather.name"
                :condition="weather.weatherCondition"
                :icon="weather.weatherIcon"
                :temp="weather.temp"
                :updated="weather.lastUpdated"
              /> </b-row
          ></b-tab>
          <b-tab title="Last Updated"
            ><b-row>
              <Table
                v-for="weather in mostRecentServerUpdate"
                :id="weather.id"
                :key="weather.id"
                :name="weather.name"
                :condition="weather.weatherCondition"
                :icon="weather.weatherIcon"
                :temp="weather.temp"
                :updated="weather.lastUpdated"
              /> </b-row
          ></b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Table from '../components/Table'
export default {
  components: {
    Table,
  },
  async fetch() {
    const weather = await fetch(
      'http://dnu5embx6omws.cloudfront.net/venues/weather.json'
    ).then((res) => res.json())
    this.$store.commit('weather/getWeather', weather.data)
    this.$store.commit('weather/sortTemperature', weather.data)
    this.$store.commit('weather/sortAlphabetically', weather.data)
    this.$store.commit('weather/sortByDate', weather.data)
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('weather', [
      'weatherData',
      'temperatureLevels',
      'alphabeticalOrder',
      'mostRecentServerUpdate',
    ]),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
