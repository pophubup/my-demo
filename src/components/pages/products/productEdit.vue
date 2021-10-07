<template>
  <Container>
    <Toast />
    <Button label="新增商品" @click="ProductInsert" />
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
      <div v-if="kind == 'InsertProduct'">
        <DialogsInsertContent @add-Newimage="addNewimage" />
      </div>
      <div v-else>
        <Content
          :currentlabel="currentlabel"
          :labels="labels"
          :selectedvalue="selectedvalue"
          :node="node"
          :onUpload="onUpload"
          :kind="kind"
          :description="description"
          :labelName="labelName"
          :myUploader="myUploader"
          :selectedItem="selectedItem"
          :groups="groups"
        />
      </div>
    </Dialog>

    <Toast />
  </Container>
</template>

<script>
import InnerProductTable from "./subcomponents/InnerProductTable.vue";
import Content from "./subcomponents/DialogsContent.vue";
import DialogsInsertContent from "./subcomponents/DialogsInsertContent.vue";
export default {
  components: {
    InnerProductTable,
    Content,
    DialogsInsertContent,
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
      this.kind = "deleteCategory";
      this.display = true;
      this.header = "刪除種類";
      console.log(node);
    },
    ProductInsert() {
      this.kind = "InsertProduct";
      this.display = true;
      this.header = "新增產品";
    },
    onUpload(e) {
      console.log(e);
    },
    async addNewimage(obj) {
      const labelName = obj.labelName;
      const selectedItem = obj.selectedItem;
      const description = obj.description;
      const files = obj.files;

      // labelName: this.labelName,
      //         selectedItem: this.selectedItem,
      //         description: this.description,
      //         files: this.files,
      if (labelName == "") {
        this.$toast.add({
          severity: "warn",
          summary: "Warn Message",
          detail: "請填寫名稱或標籤",
          life: 3000,
        });
        return;
      }
      const arr = [];
      selectedItem.forEach((g) => {
        arr.push(g.id);
      });
      const formData = new FormData();
      formData.append("description", description);
      formData.append("labelName", labelName);
      formData.append("groupIds", JSON.stringify(arr));

      files.forEach((g) => {
        formData.append("files", g);
      });
      console.log(labelName, arr, description, files);
      await this.$store.dispatch("product/insertProducts", formData);
      const reuslt = this.$store.getters["product/getMessageFromApi"];

      this.$toast.add({
        severity: "success",
        summary: `${reuslt.message}`,
        detail: "",
        life: 3000,
      });
      console.log(reuslt.message);
    },
    myUploader(e) {
      this.file = e.files;
      this.$toast.add({
        severity: "info",
        summary: "暫存成功",
        detail: "",
        life: 3000,
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("group/loadOrganization");
    this.nodes = this.$store.getters["group/getOrganization"];
  },
};
</script>

<style scoped lang="scss"></style>
