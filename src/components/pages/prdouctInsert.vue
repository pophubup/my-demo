<template>
  <div class="p-col-12" style="padding-top: 90px">
     <Toast />
    <div style="padding-right: 30px; padding-left: 30px">
      <div class="p-shadow-13">
        <div class="card" style="padding: 30px">
          <h2>商品修改頁</h2>
          <form class="p-fluid p-formgrid p-grid" @submit.prevent="onSubmit">
            <div class="p-field p-md-3">
              <label for="名稱">名稱</label>
              <InputText id="名稱" type="text" v-model.trim="name" />
            </div>
             <div class="p-field  p-md-3">
              <label for="標籤">標籤</label>
              <InputText id="標籤" type="text" v-model.trim="labelName" />
            </div>
            <!-- <div class="p-field  p-md-3">
               <label for="群組">群組</label>
               <Dropdown v-model="selectGroup" :options="groups" optionLabel="groupName" optionValue="id" placeholder="請選擇群體" />

            </div> -->
          
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
         
            <div class="p-col-1 p-offset-11">
              <Button type="submit" label="確定" />
            </div>

          </form>
   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelName:'',
      name: "",
      description: "",
      file: [],
      selectGroup : 1,
      groups:[],
      formData : new FormData()
    };
  },
  async mounted() {
      // await this.$store.dispatch("group/loadGroups");
      // this.groups = this.$store.getters["group/getGroups"];
  },
  methods: {
   async onSubmit() {
       if( this.name == "" || this.labelName == ""){
         this.$toast.add({
            severity: "warn",
            summary: "Warn Message",
            detail: "請填寫名稱或標籤",
            life: 3000,
         });
         return;
       }
      this.formData.append("name", this.name);
      this.formData.append("description", this.description);
      this.formData.append("labelName", this.labelName);
      this.file.forEach(g=>{
               this.formData.append("files", g)

      });
     
      await this.$store.dispatch("product/insertProducts", this.formData);
      const reuslt = this.$store.getters["product/getMessageFromApi"]
      console.log(reuslt.message)
        this.$toast.add({severity:'success', summary: `${reuslt.message}`, detail:'', life: 3000});
    },
    myUploader(event) {
      this.file = event.files;
      this.$toast.add({
        severity: "info",
        summary: "暫存成功",
        detail: "",
        life: 3000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>