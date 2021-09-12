<template>
  <div v-if="kind === 'loading'">
    <Dialog
      :closable="false"
      :dismissableMask="false"
      :header="null"
      style="width: 150px"
      :modal="true"
      v-model:visible="isLoading"
    >
      <ProgressSpinner mode="indeterminate" />
    </Dialog>
  </div>
  <div v-else-if="kind === 'display'">
    <Dialog
      :header="header"
      v-model:visible="display"
      :style="{ width: '70vw' }"
      :modal="true"
    >
      <Card>
        <template #header>
          <img :alt="cardalt" :src="cardsrc" />
        </template>
        <template #content>
          {{ carcontent }}
        </template>
      </Card>
    </Dialog>
  </div>
</template>

<script>
export default {
  props: [
    "kind",
    "header",
    "display",
    "cardsrc",
    "cardalt",
    "carcontent",
    "isLoading",
  ],
};
</script>

<style></style>
