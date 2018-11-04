<template>
  <div class="home">
    <!--  -->
    <input v-model="picLink" type="text"> <button v-on:click="this.yo">Update</button> <br>
    <img alt="Vue logo" v-bind:src="this.picLink">
    <HelloWorld v-bind:msg="this.datassdata[0].name.toString() +': '+ (this.datassdata[0].value*100).toString()+'% accuracy'"/>
  </div>




</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {appclar} from '@/clarifai.js';

export default {
  name: 'home',
  components: {
    HelloWorld,
	HereMap,
  },

  data() {
    return {
      message: 'hrllo',
      datassdata: [],
      picLink: 'https://pbs.twimg.com/profile_images/378800000021016777/1d530fa4b92b883270c5bdd7583ed073_400x400.jpeg'
    };
  },
  methods: {
     yo : function (){
      this.datassdata = [];
      appclar.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.picLink);
      })
      .then(response => {
        response['outputs'][0]['data']['concepts'].forEach(element => {
          this.datassdata.push(element);
        });
      })
    }
  },beforeMount(){
    this.yo();
  }
};
</script>
