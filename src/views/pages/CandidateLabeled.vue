<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Candidates">
            <TableCandidateLabeled></TableCandidateLabeled>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "CoAuthor",

  data: () => ({
  }),
  components: {
      TableCandidateLabeled: () => import('@/components/vuetifyComponents/tables-simple/TableCandidateLabeled'),
  }
};
</script>
