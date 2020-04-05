<template>
  <div>
    <v-layout column justify-center align-center class="pr-2 pl-2 pt-4">
      <v-card flat width="100%" class="text-center">
        <h1 class="text-center mb-6">Simptomat</h1>
        <form method="post" @submit.prevent>
            <v-text-field
              label="Emri"
              outlined
              prepend-inner-icon="perm_identity"
              clearable
              required
              autoFocus="true"
              dense
              v-model="username"
              :error-messages="usernameErrors"
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
            ></v-text-field>
            <v-text-field
                label="Nr Personal"
                outlined
                dense
                prepend-inner-icon="featured_play_list"
                clearable
                required
                v-model="personalId"
                :error-messages="personalIdErrors"
                @input="$v.personalId.$touch()"
                @blur="$v.personalId.$touch()"
            ></v-text-field>
          <v-text-field
              label="Nr Telefoni"
              outlined
              dense
              :error-messages="phoneNumberErrors"
              type="number"
              prepend-inner-icon="phone"
              clearable
              required
              v-model="phoneNumber"
              @input="$v.phoneNumber.$touch()"
              @blur="$v.phoneNumber.$touch()"
          ></v-text-field>

          <v-text-field
              label="Temperatura"
              outlined
              dense
              :error-messages="temperatureErrors"
              type="number"
              prepend-inner-icon="mdi-temperature-celsius"
              clearable
              required
              v-model="temperature"
              @input="$v.temperature.$touch()"
              @blur="$v.temperature.$touch()"
          ></v-text-field>

          <v-select
            :items="coughNivel"
            label="Niveli i kolles ?"
            v-model="cough"
            :error-messages="coughErrors"
            :menu-props="{ top: true, offsetY: true }"
            dense
            outlined
            required
            @input="$v.cough.$touch()"
            @blur="$v.cough.$touch()"
          ></v-select>

          <v-select
            :items="breathNivel"
            label="Niveli i frymarrjes ?"
            v-model="breathing"
            :error-messages="breathErrors"
            :menu-props="{ top: true, offsetY: true }"
            dense
            outlined
            required
            @input="$v.breathing.$touch()"
            @blur="$v.breathing.$touch()"
          ></v-select>
          <v-select
              :items="painNivel"
              label="Niveli i dhimbjes se trupit ?"
              v-model="pain"
              :error-messages="painErrors"
              :menu-props="{ top: true, offsetY: true }"
              dense
              outlined
              required
              @input="$v.pain.$touch()"
              @blur="$v.pain.$touch()"
          ></v-select>

          <v-select
              :items="diarrheaNivel"
              label="Keni Diarre ?"
              v-model="diarrhea"
              :error-messages="diarrheaErrors"
              :menu-props="{ top: true, offsetY: true }"
              dense
              outlined
              required
              @input="$v.diarrhea.$touch()"
              @blur="$v.diarrhea.$touch()"
          ></v-select>

          <v-select
              :items="feverNivel"
              label="Niveli i Etheve ?"
              v-model="fever"
              :error-messages="feverErrors"
              :menu-props="{ top: true, offsetY: true }"
              dense
              outlined
              required
              @input="$v.fever.$touch()"
              @blur="$v.fever.$touch()"
          ></v-select>


          <v-btn
            class="mb-6 justify-center w-full"
            @click="submit"
            style="padding: 10px 50px"
            color="primary"
          >
            Merr Pergjigje
          </v-btn>
        </form>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, between } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  mixins: [validationMixin],
  validations: {
    username: {required, maxLength: maxLength(15)},
    personalId: { required, maxLength: maxLength(10) },
    phoneNumber: { required, maxLength: maxLength(10) },
    temperature: {required, maxLength: maxLength(2), between: between(36, 42)},
    cough: {required},
    breathing: {required},
    pain: { required },
    diarrhea: {required},
    fever: {required}
  },
  data() {
    return {
      username: '',
      personalId: '',
      phoneNumber: '',
      temperature: '',
      cough: null,
      breathing: null,
      pain: null,
      diarrhea: null,
      fever: null,
      submitStatus: null,
      coughNivel: [
        {text: 'Nuk kam kolle', value: 0},
        {text: 'Kolle te lehte', value: 1},
        {text: 'Kolle mesatar', value: 2},
        {text: 'Kolle te Rendruar', value: 3}
      ],
      breathNivel: [
        {text: 'Normal', value: 0},
        {text: 'Pak te renduar', value: 1},
        {text: 'Shume te renduar', value: 2},
      ],
      painNivel: [
        {text: 'Jo, nuk kam dhimbje', value: 0},
        {text: 'Dhimbje te lehta', value: 1},
        {text: 'Dhimbje te renda', value: 2},
      ],
      diarrheaNivel: [
        {text: 'Jo', value: 0},
        {text: 'Po', value: 1},
      ],
      feverNivel: [
        {text: 'Jo', value: 0},
        {text: 'Po, shpresh me temperature mbi 38.5 grade', value: 1},
        {text: 'Po, vetem me temperature te larte ', value: 2},
      ]
    }
  },
  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) {
        return errors
      }
      !this.$v.username.maxLength &&
      errors.push('Emri nuk duhet te jete me shume se 15 karaktere')
      !this.$v.username.required &&
      errors.push('Emri eshte i detyrueshem')
      return errors
    },
    personalIdErrors() {
      const errors = []
      if (!this.$v.personalId.$dirty) {
        return errors
      }
      !this.$v.personalId.maxLength &&
        errors.push('Nr kartes duhet te jete 10 karaktere')
      !this.$v.personalId.required &&
        errors.push('Nr i kartes eshte i detyrueshem')
      return errors
    },
    phoneNumberErrors() {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) {
        return errors
      }
      !this.$v.phoneNumber.maxLength &&
        errors.push('Nr i telefonit duhet te jete 10 karaktere')
      !this.$v.phoneNumber.required &&
        errors.push('Nr i telefonit eshte i detyrueshem')
      return errors
    },
    temperatureErrors() {
      const errors = []
      if (!this.$v.temperature.$dirty) {
        return errors
      }
      !this.$v.temperature.maxLength &&
      errors.push('Temperatura duhet te jete 2 shifror!')
      !this.$v.temperature.required &&
      errors.push('Vendosja e temperatures eshte e detyrueshme!')
      !this.$v.temperature.between &&
      errors.push('Temperatura duhet te jete midis 36 dhe 42')

      return errors
    },
    coughErrors() {
      const errors = []
      if (!this.$v.cough.$dirty) return errors
      !this.$v.cough.required && errors.push('Vendosja e Nivelit te kolles eshte e detyrueshme!')
      return errors
    },
    breathErrors() {
      const errors = []
      if (!this.$v.breathing.$dirty) return errors
      !this.$v.breathing.required && errors.push('Vendosja e Nivelit te frymarrjes eshte e detyrueshme!')
      return errors
    },
    painErrors() {
      const errors = []
      if (!this.$v.pain.$dirty) return errors
      !this.$v.pain.required && errors.push('Vendosja e Nivelit te dhimbjes se trupit eshte e detyrueshme!')
      return errors
    },
    diarrheaErrors() {
      const errors = []
      if (!this.$v.diarrhea.$dirty) return errors
      !this.$v.diarrhea.required && errors.push('Vendosja e Nivelit te diarres eshte e detyrueshme!')
      return errors
    },
    feverErrors() {
      const errors = []
      if (!this.$v.fever.$dirty) return errors
      !this.$v.fever.required && errors.push('Vendosja e Nivelit te etheve eshte e detyrueshme!')
      return errors
    },
  },

  methods: {
    submit() {

        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          const payload = {
            username: this.username,
            nid: this.personalId,
            phone: this.phoneNumber,
            temperature: this.temperature,
            cough: this.cough,
            breathing: this.breathing,
            pain: this.pain,
            diarrhea: this.diarrhea,
            other: this.fever
          }

          axios.post('http://health.inovacion.al/api/symptoms/',payload)
            .then(response => {
            })
            .catch(function (error) {
              console.log(error);
              // this.$v.$reset()
              this.username = ''
              this.personalId = ''
              this.phoneNumber = ''
              this.temperature = ''
              this.cough = ''
              this.breathing = ''
              this.pain = ''
              this.diarrhea = ''
              this.other = ''
            })
        }
    }
  },
}
</script>

<style scoped></style>
aa931mt