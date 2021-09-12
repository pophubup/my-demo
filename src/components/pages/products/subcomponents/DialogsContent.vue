<template>
  <div>
    <div v-if="kind == 'editPic'">
      <div class="p-fluid">
        <div class="p-field p-grid">
          <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">檔案名稱</label>
          <div class="p-col-12 p-md-10">
            <InputText type="text" :value="node.fileName" />
          </div>
        </div>
        <div class="p-field p-grid">
          <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">內容</label>
          <div class="p-col-12 p-md-10">
            <Textarea
              :autoResize="true"
              rows="5"
              cols="30"
              :value="node.description"
            />
          </div>
        </div>
        <div class="p-field p-grid">
          <label for="label" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
            >標籤轉換</label
          >
          <div class="p-col-12 p-md-10">
            <MultiSelect
              v-model="selectedvalue"
              :options="labels"
              optionLabel="labelName"
              :placeholder="currentlabel"
            />
          </div>
        </div>
        <div class="p-field p-grid">
          <label for="label" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
            >新圖檔</label
          >
          <div class="p-col-12 p-md-10">
            <FileUpload
              mode="basic"
              name="demo[]"
              accept="image/*"
              :maxFileSize="1000000"
              :customUpload="true"
              :auto="true"
              chooseLabel="go"
              @uploader="onUpload"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="kind == 'deletePic'">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span
          >您確定要刪除照片 <b>{{ node.fileName }}</b
          >?</span
        >
      </div>
    </div>
    <div v-else-if="kind == 'editLabel'">
      <div class="p-fluid">
        <div class="p-field p-grid">
          <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">標籤名稱</label>
          <div class="p-col-12 p-md-10">
            <InputText type="text" :value="node.labelName" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="kind == 'deleteLabel'">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span
          >您確定要刪除標籤 <b>{{ node.labelName }}</b
          >?</span
        >
      </div>
    </div>
    <div v-else-if="kind == 'editCategory'">
      <div class="p-fluid">
        <div class="p-field p-grid">
          <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">種類名稱</label>
          <div class="p-col-12 p-md-10">
            <InputText type="text" :value="node.groupName" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="kind == 'deleteCategory'">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span
          >您確定要刪除種類 <b>{{ node.groupName }}</b
          >?</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "kind",
    "node",
    "selectedvalue",
    "labels",
    "currentlabel",
    "onUpload",
  ],
};
</script>

<style lang="scss" scoped>
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
