<template>
  <div class="weather grid-style text-center card">
    <p>{{ temp }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      temp: 0,
      suburb: '',
      weatherCondition: '',
      updated: '',
      feelsLike: 0,
    }
  },
  computed: {
    ...mapGetters('weather', ['findLocation']),
  },
  mounted() {
    const location = this.findLocation(this.$route.params.id)
    this.temp = location.temp
    this.suburb = location.suburb
    this.weatherCondition = location.weatherCondition
    this.updated = location.updated
    this.feelsLike = location.feelsLike
  },
}
</script>
<style>
.weather {
  padding: 1rem;
  border: 1px dotted '#53BF6B';
  margin: 1rem 0;
}
.text-center {
  text-align: center;
}
.grid-style {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.card {
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
}
</style>
