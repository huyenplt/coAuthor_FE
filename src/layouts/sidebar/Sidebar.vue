<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-break-point="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="70"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
  >
    <v-list dense nav>
      <!---Sidebar Items -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :active-class="`success white--text`"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!---Sidebar Items -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      // {
      //   title: "Tác giả",
      //   icon: "mdi-account-circle",
      //   to: "/authors"
      // },
      // {
      //   title: "Thêm mới tác giả",
      //   to: "/authors/add"
      // },
      {
        title: "Danh sách tác giả",
        icon: "mdi-account-circle",
        to: "/authors"
      },
      // {
      //   title: "Bài báo",
      //   icon: "mdi-file-document-edit-outline",
      //   to: "/papers"
      // },
      // {
      //   title: "Thêm mới bài báo",
      //   to: "/papers/add"
      // },
      {
        icon: "mdi-file-document-edit-outline",
        title: "Danh sách bài báo",
        to: "/papers"
      },
      {
        title: "Gợi ý cộng tác",
        icon: "mdi-table-column-width",
        to: "/co-author"
      },
      {
        title: "Tạo bảng đồng tác giả",
        to: "/co-author/create"
      },
      {
        title: "Tạo bảng ứng viên",
        to: "/co-author/candidate"
      },
      {
        title: "Áp dụng sSMC_FCM",
        to: "/co-author/sSMC_FCM"
      },
      {
        title: "Xem gợi ý cộng tác",
        icon: "mdi-account-search",
        to: "/predict"
      },
    ]
  }),
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      }
    }
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    }
  },

  methods: {}
};
</script>
<style lang="scss">
#main-sidebar{
  box-shadow:1px 0 20px rgba(0,0,0,.08);
  -webkit-box-shadow:1px 0 20px rgba(0,0,0,.08);
  .v-navigation-drawer__border{
    display: none;
  }
  .v-list{
    padding: 8px 15px;
  }
  .v-list-item{
      &__icon--text,
      &__icon:first-child{
        justify-content: center;
        text-align: center;
        width: 20px;
        
      }
      
  }    
}
</style>
