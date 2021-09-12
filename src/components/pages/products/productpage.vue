<template>
  <Container>
    <DialogsForDisplay
      :carcontent="carcontent"
      :cardalt="cardalt"
      :cardsrc="cardsrc"
      :display="display"
      :header="header"
      :kind="kind"
      :isLoading="isLoading"
    />
    <h2>圖片展示頁</h2>
    <DataView
      :value="products"
      :layout="layout"
      :paginator="true"
      :rows="8"
      style="cursor: pointer"
    >
      <!-- <template #header> -->
      <!-- <div class="p-grid p-nogutter"> -->
      <!-- <div class="p-col-6" style="text-align: left">
            <Dropdown
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              placeholder="Sort By Price"
              @change="onSortChange($event)"
            />
          </div> -->
      <div class="p-col-6" style="text-align: right">
        <DataViewLayoutOptions v-model="layout" />
      </div>
      <template #list="slotProps">
        <div class="p-col-12">
          <div class="product-list-item">
            <img
              :src="slotProps.data.image"
              :alt="slotProps.data.name"
              @click="imgclick(slotProps.data)"
            />
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-col-12 p-md-3">
          <div class="product-grid-item card">
            <div class="product-grid-item-content">
              <img
                class="product-grid-item-content-maxWidth"
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                @click="imgclick(slotProps.data)"
              />
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </Container>
</template>

<script>
import DialogsForDisplay from "./subcomponents/DialogsForDisplay.vue";
export default {
  components: {
    DialogsForDisplay,
  },
  data() {
    return {
      display: false,
      isLoading: false,
      products: null,
      layout: "grid",
      content: "",
      cardsrc: "",
      cardalt: "",
      carcontent: "",
      header: "",
      kind: "",
      // sortKey: null,
      // sortOrder: null,
      // sortField: null,
      // sortOptions: [
      //   { label: "Price High to Low", value: "!price" },
      //   { label: "Price Low to High", value: "price" },
      // ],
    };
  },
  async mounted() {
    this.kind = "loading";
    this.isLoading = true;
    await this.$store.dispatch("product/loadProducts", { forceRefresh: true });
    this.products = this.$store.getters["product/getProducts"];
    this.isLoading = false;
  },
  methods: {
    imgclick(data) {
      console.log(data);

      this.header = data.name;
      this.cardsrc = data.image;
      this.cardalt = data.name;
      this.carcontent = data.description;
      this.kind = "display";
      this.display = true;
    },
    getApiTest() {
      // this.a
    },

    // onSortChange(event) {
    //   const value = event.value.value;
    //   const sortValue = event.value;
    //   if (value.indexOf("!") === 0) {
    //     this.sortOrder = -1;
    //     this.sortField = value.substring(1, value.length);
    //     this.sortKey = sortValue;
    //   } else {
    //     this.sortOrder = 1;
    //     this.sortField = value;
    //     this.sortKey = sortValue;
    //   }
    // },
    // },  created() {
    //   const api = 'https://yohoho123.azurewebsites.net/api/group/getgroups';
    //   this.axios.get(api).then(response => {
    //     console.log(response);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.product-grid-item-content-maxWidth {
  //使用者須訂好size為1:1比例
  max-width: 500px;
  max-height: 500px;
}

.card {
  box-shadow: none !important;
}
.product-grid-item {
  margin: 0.5rem;
  border: 0px solid #dee2e6 !important;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  img {
    width: 200px !important;
  }
}

@media only screen and (min-width: 1370px) and (max-width: 1605px) {
  img {
    width: 300px !important;
  }
}

.card {
  background: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}

::v-deep(.product-grid-item) {
  margin: 0.5rem;
  border: 1px solid #dee2e6;

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
