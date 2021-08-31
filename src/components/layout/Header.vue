<template>
  <Menubar :model="items" class="p-col-12" style="position: fixed !important">
    <!-- <template #start>
        Before
    </template>
    <template #item="{item}">
        <a :href="item.to">{{item.label}}</a>
    </template>
    <template #end>
        After
    </template> -->
  </Menubar>
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
          label: "關於我",
          icon: "pi pi-fw pi-file",
          to: "/main",
        },
        {
          label: "商品頁",
          icon: "pi pi-fw pi-file",
          to: "/product",
        },
        {
          label: "商品新增頁",
          icon: "pi pi-fw pi-file",
          to: "/productInsert",
        },
        {
          label: "商品修改頁",
          icon: "pi pi-fw pi-file",
          to: "/productEdit",
        },
           {
          label: "contact",
          icon: "pi pi-fw pi-file",
          to: "/contact",
        },
      ],
    };
  },
};
/* 參考設定 https://www.primefaces.org/primevue/showcase/#/menu */
</script>

<style scoped>
</style>
