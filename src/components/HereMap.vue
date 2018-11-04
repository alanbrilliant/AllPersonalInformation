<template>
    <div class="here-map">
<div id="map2" style="width: 600px; height: 400px; background: grey"></div>
<div ref="map" v-bind:style="{ width: width, height: height }">
</div>
</div>
</template>

<script>
export default {
  name: 'HereMap',
  data() {
    return {
      map: {},
      streetMap: {},
      platform: {},
    };
  },
  props: ['appId', 'appCode', 'width', 'height', 'lat', 'lng'],
  created() {
    // Create a Platform object:
    this.platform = new H.service.Platform({
        	app_id: this.appId,
        	app_code: this.appCode,
    	});
  },
  mounted() {
    // console.log(thi)
    this.platform.configure(H.map.render.panorama.RenderEngine);

    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,
      {
        zoom: 15,
        center: { lng: this.lng, lat: this.lat },
      },
    );
    // Configure panorama with platform credentials:
    this.defaultLayers = this.platform.createDefaultLayers();

    // Instantiate a map, giving the constructor the engine type to use:
    this.streetMap = new mapsjs.Map(document.getElementById('map2'), this.defaultLayers.normal.panorama, {
      center: { lat: this.lat, lng: this.lng },
      zoom: 25,
      engineType: H.Map.EngineType.PANORAMA,
    });



    //  H.map.render.panorama.RenderEngine.getClosestPanoramas(
    // {lat: 48.8733641244471, lng: 2.294754032045603}, function(panoramaData) {
    // if (panoramaData.length) {
    //     console.log("TEst");
    //   // Set map center to the location of the first available panorama:
   
      
    //     console.log("TEdsdddddfsdst");
    //   // Switch to to the panorama engine to show the panorama:
    //           console.log("TEdsfsdst");

    // }
    console.log(mapsjs);

  

    // H.map.render.panorama.RenderEngine.getClosestPanoramas(
    //   { lat: 51.51, lng: -0.07 }, (panoramaData) => {
    //     if (panoramaData.length) {
    //       // Set map center to the location of the first available panorama:
    //       map.setCenter(panoramaData[0].position);
    //       // Switch to to the panorama engine to show the panorama:
    //       map.setEngineType(H.Map.EngineType.PANORAMA);
    //     }

    //   },
    // );
  },
  watch: {
    lng(newVal, oldVal) { // watch it
      this.map.setCenter({ lng: newVal, lat: this.lat }, true);
    //   this.streetMap.setCenter({ lng: newVal, lat: this.lat }, true);
    },
    lat(newVal, oldVal) { // watch it
      this.map.setCenter({ lng: this.lng, lat: newVal }, true)
    //   this.streetMap.setCenter({ lng: this.lng, lat: newVal }, true)
      
    },
  },
};
</script>

<style scoped>
</style>
