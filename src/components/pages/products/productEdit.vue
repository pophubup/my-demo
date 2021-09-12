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
      <Column :exportable="false" header="種類管理">
        <template #body="slotProps_0">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success p-mr-2"
            @click="editCategory(slotProps_0.data)"
            title="更改圖檔"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="confirmCategory(slotProps_0.data)"
            title="刪除圖檔"
          />
        </template>
      </Column>
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
    <Dialog
      :header="header"
      v-model:visible="display"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <Content
        :currentlabel="currentlabel"
        :labels="labels"
        :selectedvalue="selectedvalue"
        :node="node"
        :onUpload="onUpload"
        :closeModal="closeModal"
        :kind="kind"
      />

      <template #footer>
        <Button
          label="取消"
          icon="pi pi-times"
          @click="display = false"
          class="p-button-text"
        />
        <Button label="確定" icon="pi pi-check" @click="closeModal" />
      </template>
    </Dialog>

    <Toast />
  </Container>
</template>

<script>
import InnerProductTable from "./subcomponents/InnerProductTable.vue";
import Content from "./subcomponents/DialogsContent.vue";
export default {
  components: {
    InnerProductTable,
    Content,
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
      display: false,
      currentLevel: null,
      kind: null,
      header: null,
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
      this.kind = "editPic";
      this.display = true;
      this.currentlabel = `目前標籤(${this.currentLevel.labelName})`;
      this.header = "修改圖片";
      await this.$store.dispatch("label/loadLabels", node.id);
      this.labels = this.$store.getters["label/getLabels"];
    },
    confirmDeletePic(node) {
      this.node = node;
      this.kind = "deletePic";
      this.display = true;
      this.header = "刪除圖片";
      console.log(node);
    },
    editLabel(node) {
      this.node = node;
      this.kind = "editLabel";
      this.display = true;
      this.header = "刪除標籤";
      console.log(node);
    },
    deleteLabel(node) {
      this.node = node;
      this.kind = "deleteLabel";
      this.display = true;
      this.header = "刪除圖片";
      console.log(node);
    },
    deleteProduct() {
      this.display = false;
      this.$toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Product Deleted",
        life: 3000,
      });
    },
    editCategory(node) {
      this.node = node;
      this.kind = "editCategory";
      this.display = true;
      this.header = "編輯種類";
      console.log(node);
    },
    confirmCategory(node) {
      this.node = node;
      this.kind = "deleteCategory";
      this.display = true;
      this.header = "刪除種類";
      console.log(node);
    },
    closeModal(e) {
      this.display = false;
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

<style scoped lang="scss"></style>
