<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Bảng đồng tác gỉa">
            <TableCoAuthor></TableCoAuthor>
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
      TableCoAuthor: () => import('@/components/vuetifyComponents/tables-simple/TableCoAuthor'),
  }
};
</script>
