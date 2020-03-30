<template>
  <div>
    <v-layout column justify-center align-center class="pr-2 pl-2 pt-4">
      <v-tabs
        slider-color="white"
        class="mb-4"
        centered="centered"
        grow="grow"
        v-model="tabs"
      >
        <v-tabs-slider> </v-tabs-slider>
        <v-tab>
          <span class="mr-2">Shqiperi</span>
          <v-icon>place</v-icon>
        </v-tab>
        <v-tab>
          <span class="mr-2">Bote</span>
          <v-icon>mdi-earth</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card xs12 sm8 md6 class="mb-4">
            <v-list subheader>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon class="blue white--text">place</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{
                    this.countries[84].country
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="darken-3"
                    >Perditesuar ne Daten:
                    {{ this.countries[84].day }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-information</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Raste Te Reja</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].cases.new }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Aktive</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].cases.active }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Kritike</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].cases.critical }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Te Permiresuar</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].cases.recovered }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Totali</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].cases.total }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-information</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Vdekje Te Reja</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{
                    this.countries[84].deaths.new === null
                      ? '0'
                      : this.countries[84].deaths.new
                  }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Vdekje Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.countries[84].deaths.total }}</span>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-flex xs12 sm8 md6 />
          <v-expansion-panels :inset="true" class="mb-6" focusable>
            <v-expansion-panel
              v-for="(country, index) in this.countries"
              :key="index"
            >
              <v-expansion-panel-header>
                {{ country.country }}</v-expansion-panel-header
              >
              <v-expansion-panel-content class="mt-5 text-lg">
                <v-list subheader>
                  <v-subheader
                    >Përditsuar në Datën: {{ country.day }}</v-subheader
                  >

                  <v-list>
                    <v-list-group no-action>
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Rastet</v-list-item-title>
                        </v-list-item-content>
                      </template>
                      <v-list-item-content class="new-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Të Reja</span>
                          <span class="float-right pr-2"
                            >{{ country.cases.new }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="active-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Aktive</span>
                          <span class="float-right pr-2"
                            >{{ country.cases.active }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="critical-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Gjendje Kritike</span>
                          <span class="float-right pr-2"
                            >{{ country.cases.critical }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="recovered-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Të Shëruar</span>
                          <span class="float-right pr-2"
                            >{{ country.cases.recovered }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="total-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Totali</span>
                          <span class="float-right pr-2"
                            >{{ country.cases.total }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-group>

                    <v-list-group no-action>
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Vdekje</v-list-item-title>
                        </v-list-item-content>
                      </template>
                      <v-list-item-content class="new-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Të Reja</span>
                          <span class="float-right pr-2"
                            >{{
                              country.deaths.new === null
                                ? '0'
                                : country.deaths.new
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="new-deaths">
                        <v-list-item-title
                          ><span class="float-left pl-2">Totali</span>
                          <span class="float-right pr-2"
                            >{{ country.deaths.total }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-group>
                  </v-list>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Insight extends Vue {
  countries: any = []
  tabs: number = 0

  mounted() {
    axios({
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': '8616b8c3b6msh6ae43974091fe26p116c54jsne81f0516627d',
      },
    })
      .then(response => {
        this.countries = response.data.response
      })
      .catch(error => {
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
