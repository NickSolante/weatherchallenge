<template>
  <b-col sm="6">
    <nuxt-link id :to="'/' + id">
      <div>
        <div class="text-center card">
          <p class="suburb">{{ name }}</p>
          <p class="iconSize">
            <ion-icon class="text-center" :name="ionicon" />
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
import { appIcons, logos } from '@/assets/ionicons'
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
      ionicons: [
        {
          name: 'App icons',
          icons: appIcons,
        },
        {
          name: 'Logos',
          icons: logos,
        },
      ],
      ionicon: '',
    }
  },
  mounted() {
    this.ionicon = this.iconHandler(this.icon)
  },
  methods: {
    iconHandler(weather) {
      switch (weather) {
        case 'partlycloudy':
          return 'partly-sunny'
        case 'clear':
          return 'sunny'
        case 'cloudy':
          return 'cloudy'
        case 'mostlycloudy':
          return 'cloudy'
        case 'rain':
          return 'rainy'
        case 'hazy':
          return 'eye-off'
        case 'fog':
          return 'eye-off'
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
