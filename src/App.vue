<template>
  <div id="app">
    <NavBar />
    <RandomPlanet />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import RandomPlanet from '@/components/RandomPlanet'
export default {
  name: 'App',
  components: {
    NavBar,
    RandomPlanet
  }
}
</script>

<style>

</style>
