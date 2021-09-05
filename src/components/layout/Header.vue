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
  <div class="floatIcon">
    <a class="floatIcon-a" href="https://www.behance.net/kv-photography">
      <img
        class="floatIconImg p-mb-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
      />
    </a>
    <a class="floatIcon-a" href="https://www.behance.net/kv-photography">
      <img
        class="floatIconImg p-mb-2"
        src="
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
      />
    </a>
  </div>
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
          to: "/prdouctInsert",
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
.floatIcon {
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 2;
  width: 50px;

  color: white;
  text-align: center;

  
}

.floatIconImg {
  width: 40px;
  height: 40px;
  border-radius: 13px;

}
.floatIconImg:hover {
    cursor: pointer;
  transform: rotate(360deg);
  transition: transform 0.5s;
  background-color: yellow;
}
</style>
