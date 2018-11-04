<template>
  <div class="home">
    <input v-model="picLink" type="text"> <button v-on:click="this.yo">Update</button> <br>
    <img alt="Vue logo" v-bind:src="this.picLink">
    <HelloWorld v-for="elem in this.datassdata" v-bind:key="elem.name + Math.random()" v-bind:msg= "elem.name.toString()"/>
    
    <!-- <HelloWorld v-bind:msg="this.datassdata[0].name.toString() +': '+ (this.datassdata[0].value*100).toString()+'% accuracy'"/> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {appclar} from '@/clarifai.js';
//import {client} from '@/google-images.js';
//import GoogleImageSearch from 'free-google-image-search';

export default {
  name: 'home',
  components: {
    HelloWorld,
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
    //,
    //activateSearch : async function(){
      //const images = await client.search('Steve Angello')
      //console.log(images)
        //   .then(images => {
  //            console.log(images['url']);

  //      /*
  //       [{
  //           "url": "http://steveangello.com/boss.jpg",
  //           "type": "image/jpeg",
  //           "width": 1024,
  //           "height": 768,
  //           "size": 102451,
  //           "thumbnail": {
  //               "url": "http://steveangello.com/thumbnail.jpg",
  //               "width": 512,
  //               "height": 512
  //           }
  //       }]
  //        */
  //   });
    //}
  },
  beforeMount(){
    this.yo();
    this.activateSearch();
  }
};
</script>
