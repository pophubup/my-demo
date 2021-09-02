<template>

  <div class="p-col-12" style="padding-top: 90px">
    <div style="padding-right: 30px; padding-left: 30px">
      <div class="p-shadow-13" >
      <div class="card" style="padding:30px">
              <h2>商品修改頁</h2>
            <form class="p-fluid p-formgrid p-grid" @submit.prevent="onSubmit">
              
                <div class="p-field p-col-12 p-md-3">
                    <label for="名稱">名稱</label>
                    <InputText id="名稱" type="text" v-model.trim="name"/>
                </div>
                
                <div class="p-field p-col-12">
                    <label for="內容">內容</label>
                    <Textarea id="內容" rows="5" :autoResize="true" v-model.trim="description"/>
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="city">圖片</label>
                    <FileUpload  name="demo[]" :customUpload="true" @uploader="myUploader" accept="image/*" :auto="true"  :maxFileSize="1000000"  />
                </div>
                <div class="p-col-1 p-offset-11">
                     <Button type="submit" label="確定"  />
                </div>
            </form>
            <OrderList v-model="cars" listStyle="height:auto" dataKey="name">
    <template #header>
        List of Cars
    </template>
    <template #item="slotProps">
        <div class="p-caritem">
          
            <div class="p-grid"> 
             <div class="p-col-4" style="    padding-top: 10px;">  <img :src="slotProps.item.file.objectURL" style="width:300px"></div>
             <div class="p-col">名稱:     <span class="p-caritem-vin">{{slotProps.item.name}}</span></div>
               <div class="p-col ">敘述: <span> {{slotProps.item.description}}</span></div>
         
               
            </div>
        </div>
    </template>
</OrderList>

        </div>
     </div>
     </div>
     </div>
 
</template>

<script>
export default {
   data() {
     return {
       cars:[ ],
       name :'',
       description:'',
       file:'',
     }
   },
   methods: {
     onSubmit(){
          const obj = {
             name : this.name,
             description : this.description,
            file : this.file
          }
          this.cars.push(obj)
          console.log(obj)
     },
     onUpload(event) {
     
         this.file = event.files[0]
         this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
      },
   },

};
</script>

<style lang="scss" scoped>

</style>