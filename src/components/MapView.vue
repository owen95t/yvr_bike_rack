<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>

import json from '/src/assets/outputLocation.json'

export default {
name: "MapView",
  data() {
    return {
      map: null,
      marker: null
    }
  },
  methods: {
    initMap() {
      try {
        // eslint-disable-next-line no-undef
        this.map = new window.google.maps.Map(document.getElementById("map"),{
          center: {lat: 49.2827, lng: -123.1207},
          zoom: 12
        })
      } catch (e){
        console.log(e)
      }
      this.initMarkers()
    },
    initMarkers() {
      for (let x in json) {
        // eslint-disable-next-line no-undef
        this.marker = new window.google.maps.Marker({
          position: {lat: parseFloat(json[x].Latitude), lng: parseFloat(json[x].Longitude)},
          map: this.map
        })
      }
    },
    printLatLong() {
      for (let x in json) {
        console.log(parseFloat(json[x].Latitude) + parseFloat(json[x].Longitude))
      }
    }
  },
  mounted() {
    this.initMap()
    //this.printLatLong()
  }
}
</script>

<style scoped>
#map{
  height: 800px;
  width: 100%;
}
</style>