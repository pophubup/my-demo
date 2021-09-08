<template>
    
  <div class="p-col-12" style="padding-top: 80px">
       <Toast />
 <div style="padding-right: 30px; padding-left: 30px">
     
      <div class="p-shadow-13">
           <div class="card" style="padding: 30px">
            <h5>Advanced</h5>
       
        <TreeTable :value="nodes">
            <template #header>
                FileSystem
            </template>
            <Column field="groupID" header="ID" :expander="true"></Column>
            <Column field="name" header="Name"></Column>
            <!-- <Column headerStyle="width: 8em" headerClass="p-text-center" bodyClass="p-text-center">
                <template #header>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
                <template #body>
                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                </template>
            </Column> -->
            <template #footer>
                <div style="text-align:left">
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
        </TreeTable>
          
        </div>
      </div>
      
</div>
	
</div>
       
</template>

<script>
export default {
 data() {
        return {
           nodes: [  ]
           }
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});
        },
        onNodeExpand(node) {
            this.$toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});
        },
        onNodeCollapse(node) {
            this.$toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});
        }
    },
    async mounted() {
       await this.$store.dispatch("group/loadOrganization");
       const data = this.$store.getters["group/getOrganization"];
       const root =[];
       data.forEach((g, index)=>{
          this.nodes.push({
              key: index,
              groupID: g.groupID, 
              name: g.name,
              children : g.labels
          })
       })
       console.log(this.nodes)
   
    },
}
</script>

<style scoped lang="scss">
::v-deep(.p-organizationchart) {
    .p-person {
        padding: 0;
        border: 0 none;
    }

    .node-header, .node-content {
        padding: .5em .7rem;
    }

    .node-header {
        background-color: #495ebb;
        color: #ffffff;
    }

    .node-content {
        text-align: center;
        border: 1px solid #495ebb;
    }

    .node-content img {
        border-radius: 50%;
    }

    .department-cfo {
        background-color: #7247bc;
        color: #ffffff;
    }

    .department-coo {
        background-color: #a534b6;
        color: #ffffff;
    }

    .department-cto {
        background-color: #e9286f;
        color: #ffffff;
    }
}
</style>