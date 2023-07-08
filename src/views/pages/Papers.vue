<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Papers">
            <TablePapers></TablePapers>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TableSimple",

  data: () => ({
  }),
  components: {
      TablePapers: () => import('@/components/vuetifyComponents/tables-simple/TablePapers')
  }
};
</script>
