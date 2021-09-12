<template>
  <div>
    <div v-if="kind === 'editimg'">
      <Dialog
        header="修改圖片"
        v-model:visible="displayModal"
        :style="{ width: '50vw' }"
        :modal="true"
      >
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

        <template #footer>
          <Button
            label="No"
            icon="pi pi-times"
            @click="displayModal = false"
            class="p-button-text"
          />
          <Button label="Yes" icon="pi pi-check" @click="closeModal" />
        </template>
      </Dialog>
    </div>
    <div v-else-if="kind === 'deleteimg'">
      <Dialog
        v-model:visible="displayModal"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
      >
        <div class="confirmation-content">
          <i
            class="pi pi-exclamation-triangle p-mr-3"
            style="font-size: 2rem"
          />
          <span
            >您確定要刪除照片 <b>{{ node.fileName }}</b
            >?</span
          >
        </div>
        <template #footer>
          <Button
            label="No"
            icon="pi pi-times"
            class="p-button-text"
            @click="displayModal = false"
          />
          <Button
            label="Yes"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteProduct"
          />
        </template>
      </Dialog>
    </div>
    <div v-else-if="kind === 'editlabel'">
      <Dialog
        header="修改標籤"
        v-model:visible="displayModal"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <div class="p-fluid">
          <div class="p-field p-grid">
            <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">標籤名稱</label>
            <div class="p-col-12 p-md-10">
              <InputText type="text" :value="node.labelName" />
            </div>
          </div>
        </div>
        <template #footer>
          <Button
            label="No"
            icon="pi pi-times"
            @click="displayModal = false"
            class="p-button-text"
          />
          <Button label="Yes" icon="pi pi-check" @click="closeModal" />
        </template>
      </Dialog>
    </div>
    <div v-else-if="kind === 'deletelabel'"></div>
  </div>
</template>

<script>
export default {
  props: [
    "kind",
    "deleteProductDialog",
    "deleteProduct",
    "node",
    "displayModal",
    "selectedvalue",
    "labels",
    "currentlabel",
    "onUpload",
    "closeModal",
  ],
};
</script>

<style></style>
