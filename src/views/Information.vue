<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="pr-3">
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <v-card
          :color="item.color"
          dark
      >
        <v-card-title class="subtitle-2" style="word-break: break-word !important;">{{ item.question }}</v-card-title>
        <v-card-text class="white text--primary pt-4">
          <p style="-ms-word-wrap: break-word; font-family: sans-serif"> <b>{{ item.info }}</b></p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-pin',
          question: 'Cfare eshte koronavirus ?',
          info:'Koronaviruset (CoV) janё një familje e madhe virusesh që shkaktojnë sëmundje nga më të lehtat deri tek ato tepër të rënda.  Ato janë të përhapur në shumë lloje të  kafshëve dhe rrallë evoluojnë, transmetohen, infektojnë njerëzit dhe më pas përhapen midis tyre.'
        },
        {
          color: 'purple darken-1',
          icon: 'place',
          question: 'Nga vijnë koronaviruset ?',
          info: 'Koronavirusi qarkullon në kafshë, dhe disa prej koronaviruseve kanë aftësinë të transmetohen nga kafshët tek njeriu. Lakuriqet e nates konsiderohen si mbajtes natyrorë të këtyre viruseve, por gjithashtu disa specie të tjera të kafshëve njihen gjithashtu se veprojnë si burime.'
        },
        {
          color: 'blue-grey darken-2',
          icon: 'mdi-allergy',
          question: 'Cilat janë simptomat e infeksionit COVID-19 ?',
          info: ' Simptomat e COVID-19 ndryshojnë në ashpërsi nga të mos paturit fare simptoma (duke qenë asimptomatike) deri te të paturit e etheve, kollës, dhimbjes së fytit, dobësisë së përgjithshme dhe lodhjes dhe dhimbjeve muskulore dhe në ato më të rëndat raste, pneumoni e rëndë, sindromi i shqetësimit të frymëmarrjes akute dhe që të gjitha mund të çojnë deri në vdekje.',
        },
        {
          color: 'indigo',
          icon: 'mdi-account-alert',
          question: 'A janë disa persona më të rrezikuar se të tjerët ?',
          info: 'Personat e moshuar mbi 70 vjeç dhe ata me kushte jo të mira shëndetësore (p.sh. me hipertension, diabet, sëmundje kardiovaskulare, sëmundje kronike të frymëmarrjes dhe kancer) konsiderohet se janë më të rrezikuar. Burrat në këto grupe gjithashtu duket se kanë një rrezik pak më të lartë se femrat.'
        },
        {
          color: 'green accent-4',
          icon: 'mdi-test-tube',
          question: 'Kur mund ta bej testin ?',
          info: 'Nëse ndjeheni të sëmurë me simptomat COVID-19 (të tilla si ethe, kollë, vështirësi në frymëmarrje, dhimbje muskulore ose dobësi të përgjithshme), rekomandohet të kontaktoni shërbimet tuaja lokale të kujdesit shëndetësor në internet ose përmes telefonit. Nëse ofruesi juaj i kujdesit shëndetësor beson se ka nevojë për një test laboratorik për virusin që shkakton COVID-19, ai/ajo do t`ju informojë për procedurën se ku dhe si mund të kryhet testi.'
        },
      ],
    }),
  }
</script>



<style scoped>

</style>