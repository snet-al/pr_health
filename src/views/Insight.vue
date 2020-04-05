<template>
  <div>
    <v-layout column justify-center align-center class="pr-3 pl-2 pt-3">
      <v-tabs
        slider-color="white"
        class="mb-4"
        centered="centered"
        grow="grow"
        v-model="tabs"
      >
        <v-tabs-slider> </v-tabs-slider>
        <v-tab>
          <span class="pr-1">Shqipëri</span>
          <v-icon>place</v-icon>
        </v-tab>
        <v-tab>
          <span class="pr-1">Kosovë</span>
          <v-icon>place</v-icon>
        </v-tab>
        <v-tab>
          <span class="pr-1">Botë</span>
          <v-icon>mdi-earth</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item full-width>
          <v-flex xs12 sm8 md6 />
          <v-col cols="12" sm="6" md="3"> </v-col>
          <v-card xs12 sm8 md6 class="mb-4" width="800">
            <v-list subheader>
              <v-list-item class="primary" style="color: white !important;">
                <!--<v-list-item-avatar>-->
                <!--<v-icon class="blue white&#45;&#45;text">place</v-icon>-->
                <!--</v-list-item-avatar>-->
                <v-list-item-content>
                  <v-list-item-title>
                    Përditësuar në Datën:
                    <b>{{
                      this.countries[84]
                        ? this.countries[84].day
                            .split('-')
                            .reverse()
                            .join('/')
                        : ''
                    }}</b>
                  </v-list-item-title>
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
                  <span>{{
                    this.countries[84] ? this.countries[84].cases.new : ''
                  }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Aktive</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{
                    this.countries[84] ? this.countries[84].cases.active : ''
                  }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Kritike</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{
                    this.countries[84] ? this.countries[84].cases.critical : ''
                  }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Te Permiresuar</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{
                    this.countries[84] ? this.countries[84].cases.recovered : ''
                  }}</span>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-action></v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Raste Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{
                    this.countries[84] ? this.countries[84].cases.total : ''
                  }}</span>
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
                    !this.countries[84] ||
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
                  <span>{{
                    this.countries[84] ? this.countries[84].deaths.total : ''
                  }}</span>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card>

          <line-chart
            v-if="this.loaded"
            :chart-data="chartData"
            :options="options"
            :styles="myStyles"
            class="mb-6"
          />
        </v-tab-item>
        <v-tab-item full-width>
          <v-flex xs12 sm8 md6 />
          <v-card xs12 sm8 md6 class="mb-4" width="800">
            <v-list subheader :expand="true">
              <v-list-item class="primary" style="color: white !important;">
                <!--<v-list-item-avatar>-->
                <!--<v-icon class="blue white&#45;&#45;text">place</v-icon>-->
                <!--</v-list-item-avatar>-->
                <v-list-item-content>
                  <v-list-item-title>
                    Përditësuar në Datën:
                    <b>{{
                      this.kosovaData.lastUpdatedAtApify
                        ? this.kosovaData.lastUpdatedAtApify
                            .slice(0, 10)
                            .split('-')
                            .reverse()
                            .join('/')
                        : ''
                    }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">mdi-information</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Raste Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.kosovaData.infected }}</span>
                </v-list-item-icon>
              </v-list-item>
              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Raste Të Përmirësuara</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.kosovaData.recovered }}</span>
                </v-list-item-icon>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Vdekje Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <span>{{ this.kosovaData.deceased }}</span>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-text-field dense v-model="search" placeholder="Kerko" solo appendIcon="search" />
          <v-card flat width="1000">
          <v-expansion-panels :inset="true" class="mb-6" focusable>
            <v-expansion-panel
              v-for="(country, index) in this.countriesFiltered"
              :key="index + '_' + country.id"
            >
              <v-expansion-panel-header>
                {{ country.country || '' }}</v-expansion-panel-header
              >
              <v-expansion-panel-content class="mt-5 text-lg">
                <v-list subheader>
                  <v-subheader
                    >Përditësuar në Datën:
                    <b>
                      {{
                        country
                          ? country.day
                              .split('-')
                              .reverse()
                              .join('/')
                          : ''
                      }}</b
                    ></v-subheader
                  >
                  <v-list>
                    <v-list-group no-action value="true">
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon color="green">mdi-information</v-icon>
                            Rastet</v-list-item-title
                          >
                        </v-list-item-content>
                      </template>
                      <v-list-item-content class="new-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2"> Të Reja</span>
                          <span class="float-right pr-2">
                            {{
                              country && country.cases ? country.cases.new : ''
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-divider></v-divider>

                      <v-list-item-content class="active-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Aktive</span>
                          <span class="float-right pr-2">
                            {{
                              country && country.cases
                                ? country.cases.active
                                : ''
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="critical-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Gjendje Kritike</span>
                          <span class="float-right pr-2">
                            {{
                              country && country.cases
                                ? country.cases.critical
                                : ''
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content class="recovered-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Të Shëruar</span>
                          <span class="float-right pr-2">
                            {{
                              country && country.cases
                                ? country.cases.recovered
                                : ''
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-divider></v-divider>

                      <v-list-item-content class="total-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Totali</span>
                          <span class="float-right pr-2">
                            {{
                              country && country.cases
                                ? country.cases.total
                                : ''
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-group>

                    <v-list-group no-action value="true">
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon color="red">mdi-information</v-icon>
                            Vdekje</v-list-item-title
                          >
                        </v-list-item-content>
                      </template>
                      <v-list-item-content class="new-cases">
                        <v-list-item-title
                          ><span class="float-left pl-2">Të Reja</span>
                          <span class="float-right pr-2"
                            >{{
                              !country || country.deaths.new === null
                                ? '0'
                                : country.deaths.new
                            }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-divider></v-divider>
                      <v-list-item-content class="new-deaths">
                        <v-list-item-title
                          ><span class="float-left pl-2">Totali</span>
                          <span class="float-right pr-2">
                            {{ country ? country.deaths.total : '' }}
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-group>
                  </v-list>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import axios from 'axios'
import LineChart from '../components/Chart.vue'
@Component({
  components: { LineChart },
})
export default class Insight extends Vue {
  countries: any = []
  countriesFiltered: any = []
  kosovaData: object = {}
  tabs: number = 0
  loaded = false
  chartData = {
    labels: Array(),
    datasets: Array(),
  }
  search: string = ''
  options = {
    responsive: true,
  }
  @Watch('search')
  onChange(value: any, oldValue: any) {
    if (value.indexOf(':') === 0) {
      // sorting
    }
    this.countriesFiltered = this.countries.filter((item: any) => {
      return item.country.toLowerCase().indexOf(value.toLowerCase()) > -1
    })
  }
	get myStyles () {
    return {
      position: 'relative'
    }
  }

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
        this.countriesFiltered = this.countries
      })
      .catch(error => {
        console.log(error)
      })

    axios({
      method: 'GET',
      url:
        'https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true.',
    })
      .then(response => {
        this.kosovaData = response.data
      })
      .catch(error => {
        console.log(error)
      })

    axios({
      method: 'GET',
      url: `https://covid-193.p.rapidapi.com/history?country=Albania`,
      headers: {
        'X-RapidAPI-Key': '8616b8c3b6msh6ae43974091fe26p116c54jsne81f0516627d',
      },
    })
      .then(response => {
        let result = response.data.response

        this.chartData.labels = result.reverse().map((item: any) => {
          return (
            item.time.substr(8, 2) +
            '/' +
            item.time.substr(5, 2) +
            ' ' +
            item.time.substr(11, 5)
          )
        })

        let data = Array()

        this.chartData.datasets.push({
          label: ['Raste Total'],
          data: result.map((el: any) => el.cases.total),
        })
        this.chartData.datasets.push({
          label: ['Raste te Reja'],
          backgroundColor: '#f8463d',
          data: result.map((el: any) => el.cases.new),
        })
        this.chartData.datasets.push({
          label: ['Vdekje te reja'],
          backgroundColor: '#4771cb',
          data: result.map((el: any) => el.deaths.new),
        })
        this.chartData.datasets.sort().push({
          label: ['Vdekje total'],
          backgroundColor: '#fdf309',
          data: result.map((el: any) => el.deaths.total),
        })
        this.loaded = true
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style>
/*.new-cases {*/
/*background-color: #ffff7e;*/
/*color: black;*/
/*border-radius: 5px;*/
/*}*/
/*.critical-cases {*/
/*background: red;*/
/*color: white;*/
/*border-radius: 5px;*/
/*}*/
/*.recovered-cases {*/
/*background: limegreen;*/
/*color: white;*/
/*border-radius: 5px;*/
/*margin-top: 5px;*/
/*}*/
/*.new-deaths {*/
/*background: black;*/
/*color: white;*/
/*border-radius: 5px;*/
/*margin-top: 10px;*/
/*}*/
/*.active-cases {*/
/*background: darkblue;*/
/*color: white;*/
/*margin-bottom: 5px;*/
/*margin-top: 10px;*/
/*border-radius: 5px;*/
/*}*/

.v-list-item {
  color: black !important;
}

.v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
}
</style>
