<template>
  <nuxt-link id :to="'/' + id">
    <div class="grid-style">
      <div class="text-center card">
        <p>{{ name }}</p>
        <p>{{ weather }}</p>
        <p class="temperature">{{ temp + '°' }}</p>
        <p>{{ updated }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
    weather: { type: String, default: '' },
    name: { type: String, default: '' },
    temp: { type: Number, default: 0 },
    updated: { type: String, default: '' },
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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
</style>
