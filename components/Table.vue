<template>
  <b-col sm="6">
    <nuxt-link id :to="'/' + id">
      <div>
        <div class="text-center card">
          <p class="suburb">{{ name }}</p>
          <p class="iconSize">
            <font-awesome-icon :icon="icons" />
          </p>
          <p>{{ condition }}</p>
          <p class="temperature">{{ temp + '°' }}</p>
          <p>{{ updated }}</p>
        </div>
      </div>
    </nuxt-link>
  </b-col>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
    condition: { type: String, default: '' },
    icon: { type: String, default: '' },
    name: { type: String, default: '' },
    temp: { type: Number, default: 0 },
    updated: { type: String, default: '' },
  },
  data() {
    return {
      icons: [],
    }
  },
  mounted() {
    this.icons = ['fas', this.iconHandler(this.icon)]
  },
  methods: {
    iconHandler(weather) {
      switch (weather) {
        case 'partlycloudy':
          return 'cloud-sun'
        case 'clear':
          return 'sun'
        case 'cloudy':
          return 'cloudy'
        case 'mostlycloudy':
          return 'cloud'
        case 'rain':
          return 'cloud-rain'
        case 'hazy':
          return 'smog'
        case 'fog':
          return 'smog'
      }
    },
  },
}
</script>
<style>
.text-center {
  text-align: center;
}
.iconSize {
  font-size: 20px;
}
.card {
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
}
.temperature {
  font-weight: bold;
  font-size: 50px;
}
.suburb {
  font-size: 30px;
}
</style>
