<template>
  <DataTable
    :value="lableViewModels"
    v-model:expandedRows="expandedRows2"
    dataKey="labelId"
    responsiveLayout="stack"
    @rowExpand="onRowExpand"
    @rowCollapse="onRowCollapse"
  >
    <Column :expander="true" headerStyle="width: 10rem" header="相關圖片" />
    <Column field="labelId" header="標籤" sortable></Column>
    <Column field="labelName" header="標籤名稱" sortable></Column>
    <Column field="createDate" header="標籤加入時間" sortable></Column>
    <Column :exportable="false" header="標籤管理">
      <template #body="slotProps_3">
        <Button
          icon="pi pi-pencil"
          class="p-button-rounded p-button-success p-mr-2"
          title="修改標籤"
          @click="editLabel(slotProps_3.data)"
        />
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-warning"
          title="刪除標籤"
          @click="deleteLabel(slotProps_3.data)"
        />
      </template>
    </Column>
    <template #expansion="slotProps_2">
      <DataTable
        :value="slotProps_2.data.imageDatas"
        v-model:expandedRows="expandedRows2"
        dataKey="labelId"
        responsiveLayout="stack"
      >
        <Column field="fileName" header="檔名" sortable></Column>
        <Column field="description" header="內容" sortable></Column>
        <Column field="url" header="圖片">
          <template #body="slotProps_3">
            <img :src="slotProps_3.data.url" style="width: 150px;" />
          </template>
        </Column>
        <Column :exportable="false" header="圖片管理">
          <template #body="slotProps_4">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success p-mr-2"
              @click="editPic(slotProps_4.data)"
              title="更改圖檔"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="confirmDeletePic(slotProps_4.data)"
              title="刪除圖檔"
            />
          </template>
        </Column>
      </DataTable>
    </template>
  </DataTable>
</template>

<script>
export default {
  props: [
    "lableViewModels",
    "expandedRows2",
    "onRowExpand",
    "onRowCollapse",
    "editPic",
    "confirmDeletePic",
    "editLabel",
    "deleteLabel",
  ],
};
</script>

<style></style>
