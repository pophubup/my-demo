<template>
  <div class="p-col-12" style="padding-top: 50px">
    <h2>圖片新增頁</h2>
    <Toast />
    <div style="padding-right: 30px; padding-left: 30px">
      <FileUpload
        name="demo[]"
        :customUpload="true"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
        @uploader="onUpload"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onUpload(event) {
      this.$store.dispatch("product/insertProducts", event.files);
      this.$toast.add({
        severity: "info",
        summary: "上傳成功",
        detail: `共${event.files.length}檔案上傳成功`,
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 200px !important;
}
</style>