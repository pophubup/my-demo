<template>
  <Menubar :model="items" />
</template>

<script>
import Menubar from "primevue/menubar";
export default {
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: "主頁",
          icon: "pi pi-fw pi-file",
          to: "/main",
        },
      ],
    };
  },
};
/* 參考設定 https://www.primefaces.org/primevue/showcase/#/menu */
</script>

<style scoped>
</style>
