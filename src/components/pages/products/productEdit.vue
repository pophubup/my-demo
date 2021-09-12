<template>
  <Container>
    <DataTable
      :value="nodes"
      v-model:expandedRows="expandedRows"
      dataKey="groupID"
      @rowExpand="onRowExpand"
      @rowCollapse="onRowCollapse"
      responsiveLayout="stack"
    >
      <Column :expander="true" headerStyle="width: 10rem" header="相關標籤" />
      <Column field="groupID" header="種類" sortable></Column>
      <Column field="groupName" header="種類名稱" sortable></Column>
      <Column field="createDate" header="種類加入時間" sortable> </Column>
      <template #expansion="slotProps">
        <InnerProductTable
          :lableViewModels="slotProps.data.lableViewModels"
          :expandedRows2="expandedRows2"
          :onRowCollapse="onRowCollapse"
          :onRowExpand="onRowExpand"
          :confirmDeletePic="confirmDeletePic"
          :editPic="editPic"
          :editLabel="editLabel"
          :deleteLabel="deleteLabel"
        />
      </template>
    </DataTable>
    <DialogsControl
      :currentlabel="currentlabel"
      :deleteProduct="deleteProduct"
      :deleteProductDialog="deleteProductDialog"
      :displayModal="displayModal"
      :labels="labels"
      :selectedvalue="selectedvalue"
      :kind="kind"
      :node="node"
      :onUpload="onUpload"
      :closeModal="closeModal"
    />
    <Toast />
  </Container>
</template>

<script>
import InnerProductTable from "./subcomponents/InnerProductTable.vue";
import DialogsControl from "./subcomponents/DialogsForEdit.vue";
export default {
  components: {
    InnerProductTable,
    DialogsControl,
  },
  data() {
    return {
      selectedvalue: null,
      nodes: null,
      expandedRows: [],
      expandedRows2: [],
      labels: [],
      currentlabel: "",
      node: null,
      deleteProductDialog: false,
      displayModal: false,
      currentLevel: null,
      kind: null,
    };
  },
  methods: {
    onRowExpand(event) {
      this.currentLevel = event.data;
      if (event.data.groupName == undefined) {
        this.$toast.add({
          severity: "info",
          summary: `${event.data.labelName} 開啟`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "info",
          summary: `${event.data.groupName} 開啟`,
          life: 3000,
        });
      }
    },
    onRowCollapse(event) {
      this.currentLevel = null;
      if (event.data.groupName == undefined) {
        this.$toast.add({
          severity: "success",
          summary: `${event.data.labelName} 關閉`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "success",
          summary: `${event.data.groupName} 關閉`,
          life: 3000,
        });
      }
    },
    async editPic(node) {
      this.node = node;
      this.kind = "editimg";
      this.displayModal = true;
      this.currentlabel = `目前標籤(${this.currentLevel.labelName})`;
      await this.$store.dispatch("label/loadLabels", node.id);
      this.labels = this.$store.getters["label/getLabels"];
    },
    editLabel(node) {
      this.node = node;
      this.kind = "editlabel";
      this.displayModal = true;
      console.log(node);
    },
    confirmDeletePic(node) {
      console.log(node);
      this.node = node;
      this.kind = "deleteimg";
      this.displayModal = true;
    },
    deleteLabel(obj) {
      console.log(obj);
    },
    deleteProduct() {
      this.displayModal = false;
      this.$toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Product Deleted",
        life: 3000,
      });
    },
    closeModal(e) {
      this.displayModal = false;
      console.log(e);
    },
    onUpload(e) {
      console.log(e);
    },
  },
  async mounted() {
    await this.$store.dispatch("group/loadOrganization");
    this.nodes = this.$store.getters["group/getOrganization"];
  },
};
</script>

<style scoped lang="scss">
.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.product-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;

  img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 0.875rem;
  }

  .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 576px) {
  .product-item {
    flex-wrap: wrap;

    .image-container {
      width: 100%;
      text-align: center;
    }

    img {
      margin: 0 0 1rem 0;
      width: 100px;
    }
  }
}
</style>
