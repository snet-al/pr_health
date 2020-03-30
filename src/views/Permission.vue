<template>
  <div>
    <v-layout column justify-center align-center class="pr-2 pl-2 pt-4">
      <v-card flat width="100%" class="text-center">
        <h1 class="text-center mb-6">Leje levizje</h1>
        <form>
          <v-col>
            <v-text-field
              label="Nr Personal"
              outlined
              prepend-inner-icon="perm_identity"
              clearable
              required
              v-model="personalId"
              :error-messages="personalIdErrors"
              @input="$v.personalId.$touch()"
              @blur="$v.personalId.$touch()"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Nr Telefoni"
              outlined
              :error-messages="phoneNumberErrors"
              type="number"
              prepend-inner-icon="phone"
              clearable
              required
              v-model="phoneNumber"
              @input="$v.phoneNumber.$touch()"
              @blur="$v.phoneNumber.$touch()"
            ></v-text-field>
          </v-col>
          <v-btn
            class="mb-6 justify-center w-full"
            @click="submit"
            style="padding: 10px 50px"
            color="primary"
          >
            Apliko
          </v-btn>
        </form>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, numeric } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    personalId: { required, maxLength: maxLength(10) },
    phoneNumber: { required, maxLength: maxLength(10) },
  },
  data() {
    return {
      personalId: '',
      phoneNumber: '',
    }
  },
  computed: {
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
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
  },
}
</script>

<style scoped></style>
