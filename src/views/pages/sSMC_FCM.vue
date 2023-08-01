<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="sSMC_FCM Application">
            <TableResult></TableResult>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "sSMC_FCM",

  data: () => ({
  }),
  components: {
      TableResult: () => import('@/components/vuetifyComponents/tables-simple/TableResult'),
  }
};
</script>
