<template>
  <div class="divMain">
    <div class="container row">
        <CountryCard v-for="data in $store.state.countryList" :key="data.id" :data="data"></CountryCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryCard from '@/components/CountryCard.vue'

export default {
  name: 'CountryCard',
  components: {
    CountryCard
  },
created() {
    this.$store.dispatch("getAllCountry")
}
}

</script>
