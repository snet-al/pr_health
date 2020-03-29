<template>
  <div>
    <v-stepper
        v-model="e1"
        :vertical="vertical"
        :alt-labels="altLabels"
    >
      <template v-if="vertical">
        <template v-for="n in steps">
          <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
              :editable="editable"
          >
            Pyetja {{ n }}
          </v-stepper-step>

          <v-stepper-content
              :key="`${n}-content`"
              :step="n"
          >
            <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
            ><h4>Keni levizur jashte shqiperise ?</h4></v-card>
            <v-radio-group v-model="row" row style="justify-content: center">
              <v-radio @click="nextStep(n)" label="PO" value="Po" class="mr-5"></v-radio>

              <v-radio @click="nextStep(n)" label="JO" value="Jo" class="ml-3"></v-radio>
            </v-radio-group>
          </v-stepper-content>
        </template>
      </template>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        steps: 5,
        vertical: true,
        altLabels: false,
        editable: false,
        row: null
      }
    },

    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
      vertical () {
        this.e1 = 2
        requestAnimationFrame(() => this.e1 = 1) // Workarounds
      },
    },

    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>

<style scoped>

</style>