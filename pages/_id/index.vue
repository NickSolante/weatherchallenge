<template>
  <div class="weather grid-style text-center card">
    {{ findLocation(this.$route.params.id) }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters('weather', ['findLocation']),
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
