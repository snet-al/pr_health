<template>
  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn class="btn-round"  value="insight" :to="{ name: 'insight'}">
      <span>Situata</span>
      <v-icon>show_chart</v-icon>
    </v-btn>
    <v-btn class="btn-round" value="questions" :to="{ name: 'questions'}">
      <span>Pyetjet</span>
      <v-icon>question_answer</v-icon>
    </v-btn>
    <v-btn class="btn-round" value="permission" :to="{ name: 'permission'}">
      <span>Merr Leje</span>
      <v-icon>person_pin</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class BottomNav extends Vue {
    activeItem: string = 'insight';
  }
</script>