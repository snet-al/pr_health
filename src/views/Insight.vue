<template>
  <v-layout
      column
      justify-center
      align-center
      class="pr-2 pl-2 pt-4">
    <v-flex
        xs12
        sm8
        md6/>
    <v-expansion-panels
        :inset="true"
        class="mb-6"
        focusable>
      <v-expansion-panel
          v-for="(country, index) in this.countries"
          :key="index">
        <v-expansion-panel-header>
          {{ country.country }}</v-expansion-panel-header>
        <v-expansion-panel-content
            class="mt-5 text-lg">
          <v-list subheader>
            <v-subheader>Përditsuar në Datën: {{ country.day }}</v-subheader>

            <v-list>
              <v-list-group no-action>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Rastet</v-list-item-title>
                  </v-list-item-content>
                </template>
                  <v-list-item-content class="new-cases">
                    <v-list-item-title><span style="float: left; padding-left: 30px">Të Reja</span> <span style="float: right; padding-right: 30px">{{ country.cases.new }} </span> </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content class="active-cases">
                    <v-list-item-title><span style="float: left; padding-left: 30px">Aktive</span> <span style="float: right; padding-right: 30px">{{ country.cases.active }} </span> </v-list-item-title>
                  </v-list-item-content>

                <v-list-item-content class="critical-cases">
                  <v-list-item-title><span style="float: left; padding-left: 30px">Gjendje Kritike</span> <span style="float: right; padding-right: 30px">{{ country.cases.critical }} </span> </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content class="recovered-cases">
                  <v-list-item-title><span style="float: left; padding-left: 30px">Të Shëruar</span> <span style="float: right; padding-right: 30px">{{ country.cases.recovered }} </span> </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content class="total-cases">
                  <v-list-item-title><span style="float: left; padding-left: 30px">Totali</span> <span style="float: right; padding-right: 30px">{{ country.cases.total }} </span> </v-list-item-title>
                </v-list-item-content>
              </v-list-group>

              <v-list-group no-action>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Vdekje</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item-content class="new-cases">
                  <v-list-item-title><span style="float: left; padding-left: 30px">Të Reja</span> <span style="float: right; padding-right: 30px">{{ country.deaths.new === null ? '0' : country.deaths.new}} </span> </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content class="new-deaths">
                  <v-list-item-title><span style="float: left; padding-left: 30px">Totali</span> <span style="float: right; padding-right: 30px">{{ country.deaths.total }} </span> </v-list-item-title>
                </v-list-item-content>
              </v-list-group>
            </v-list>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-layout>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios'
  @Component
  export default class Insight extends Vue {
    countries:any = []

    mounted() {
      axios({
        "method": "GET",
        "url": "https://covid-193.p.rapidapi.com/statistics",
          "headers": {
            "X-RapidAPI-Key": "8616b8c3b6msh6ae43974091fe26p116c54jsne81f0516627d"
          }
        }).then((response)=>{
          this.countries = response.data.response
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
</script>
<style>
  .new-cases {
    background-color: #ffff7e;
    color: black;
    border-radius: 5px;
  }
  /*.critical-cases {*/
    /*background: red;*/
    /*color: white;*/
    /*border-radius: 5px;*/
  /*}*/
  .recovered-cases {
    background: limegreen;
    color: white;
    border-radius: 5px;
    margin-top: 5px;
  }
  .new-deaths {
    background: black;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
  /*.active-cases {*/
    /*background: darkblue;*/
    /*color: white;*/
    /*margin-bottom: 5px;*/
    /*margin-top: 10px;*/
    /*border-radius: 5px;*/
  /*}*/
</style>
