<template>
  <form @submit.prevent="addContent" class="p-fluid p-formgrid p-grid">
    <div class="p-field  p-md-3">
      <label for="標籤">標籤</label>
      <InputText id="標籤" type="text" v-model.trim="labelName" />
    </div>
    <div class="p-field  p-md-3">
      <label for="標籤">種類</label>
      <MultiSelect
        v-model="selectedItem"
        :options="groups"
        optionLabel="groupName"
        placeholder="請選擇種類"
      />
    </div>

    <div class="p-field p-col-12">
      <label for="內容">內容</label>
      <Textarea
        id="內容"
        rows="5"
        :autoResize="true"
        v-model.trim="description"
      />
    </div>

    <div class="p-field p-col-12">
      <label for="city">圖片</label>
      <FileUpload
        name="demo[]"
        :customUpload="true"
        @uploader="myUploader"
        accept="image/*"
        :auto="true"
        :maxFileSize="10000000"
        :showUploadButton="false"
        :showCancelButton="false"
        style="curor: pointer"
      />
    </div>
    <Button type="submit" label="確定" />
  </form>
</template>

<script>
export default {
  emits: ["add-Newimage"],
  data() {
    return {
      labelName: null,
      selectedItem: null,
      groups: null,
      description: null,
      files: [],
    };
  },
  methods: {
    addContent() {
      const obj = {
        labelName: this.labelName,
        selectedItem: this.selectedItem,
        description: this.description,
        files: this.files,
      };
      this.$emit("add-Newimage", obj);
    },
    myUploader(event) {
      this.files = event.files;
      this.$toast.add({
        severity: "info",
        summary: "暫存成功",
        detail: "",
        life: 3000,
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("group/loadGroups");
    this.groups = this.$store.getters["group/getGroups"];
  },
};
</script>

<style></style>
