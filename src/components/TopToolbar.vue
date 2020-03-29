<template>
  <div>
    <v-app-bar
      app
      fixed
      dark
      color="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';

  @Component
  export default class TopToolbar extends Vue {
    @Getter("title", { namespace: 'topToolbar' }) title!: string;

  }
</script>