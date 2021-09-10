<template>
    
  <div class="p-col-12" style="padding-top: 80px">
      
 <div style="padding-right: 30px; padding-left: 30px">
     
      <div class="p-shadow-13">
           <div class="card" style="padding: 30px">
               
            <Toast />
              <DataTable :value="nodes" v-model:expandedRows="expandedRows" dataKey="groupID"
              @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" responsiveLayout="stack">
             <Column :expander="true" headerStyle="width: 10rem" header="相關標籤"  />
             <Column field="groupID" header="種類" sortable></Column>
            <Column field="groupName" header="種類名稱" sortable></Column>
            <Column field="createDate" header="種類加入時間" sortable> </Column>
            <template #expansion="slotProps">
                <div class="orders-subtable">                     
                    <DataTable :value="slotProps.data.lableViewModels"  v-model:expandedRows="expandedRows2" dataKey="labelId" responsiveLayout="stack">
                         <Column :expander="true" headerStyle="width: 10rem"  header="相關圖片" />

                      
                        <Column field="labelId" header="標籤" sortable></Column>
                        <Column field="labelName" header="標籤名稱" sortable></Column>
                        <Column field="createDate" header="標籤加入時間" sortable></Column>
                        <template #expansion="slotProps_2">
                             <div class="orders-subtable">
                                  <DataTable :value="slotProps_2.data.imageDatas"  
                                  v-model:expandedRows="expandedRows2" dataKey="labelId" responsiveLayout="stack">
                                    <Column field="fileName" header="檔名" sortable></Column>
                                    <Column field="description" header="內容" sortable></Column>
                                     <Column field="url" header="圖片" >
                                        <template #body="slotProps_3">
                                             <img :src="slotProps_3.data.url"  style="width: 150px;"/>
                                        </template>
                                     
                                     </Column>
                                     <Column :exportable="false">
                    <template #body="slotProps_4">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps_4.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps_4.data)" />
                    </template>
                </Column>
                                  </DataTable>
                             </div>
                        </template>
                    </DataTable>
                </div>
            </template>
        </DataTable>
        </div>

	
          
        </div>
      </div>
        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                <span >您確定要刪除照片 <b>{{node.fileName}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
        </Dialog>
    
        <Dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
          <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col">
        <label for="firstname">Firstname</label>
        <InputText id="firstname" type="text" :value="node.fileName"/>
    </div>
    <div class="p-field p-col">
        <label for="lastname">Lastname</label>
        <InputText id="lastname" type="text" />
    </div>
</div>

            <template #footer>
                <Button label="No" icon="pi pi-times" @click="displayModal =false" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeModal" />
            </template>
        </Dialog>

</div>
	

       
</template>

<script>
export default {
 data() {
        return {
            nodes : null,
            expandedRows: [] ,
            expandedRows2:[],
            node:null,
            deleteProductDialog: false,
            displayModal :false
            }
    },
    methods: {
         
       onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: `${ event.data.groupName } 開啟`, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: `${ event.data.groupName } 關閉`, life: 3000});
        },
        editProduct(node) {
              this.node = node;
             this.displayModal = true;
           
            
        },
          confirmDeleteProduct(node) {
            console.log(node)
             this.node = node;
             this.deleteProductDialog = true;
        },
        deleteProduct() {
        
            // this.deleteProductDialog = false;
            // this.product = {};
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        },
        
    
    },
    async mounted() {
       await this.$store.dispatch("group/loadOrganization");
       this.nodes = this.$store.getters["group/getOrganization"];
       console.log(this.nodes)
     
    },
}
</script>

<style scoped lang="scss">
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style>