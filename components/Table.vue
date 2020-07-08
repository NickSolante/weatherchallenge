<template>
  <nuxt-link id :to="'/' + id">
    <div class="grid-style text-center card">
      <p>{{ name }}</p>
      <p>{{ weather }}</p>
      <p>{{ temp }}</p>
      <p>{{ updated }}</p>
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.card {
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
}
</style>
