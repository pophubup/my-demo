<template>
  <div>
    <div class="p-col-12" style="padding-top: 50px">
      <h1 class="">ss</h1>
    </div>
    <div class="p-text-center">
      <span> 與香蕉王聯繫</span>
    </div>

    <div class="p-shadow-8 m-p-15">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12">
          <label for="UserName">UserName</label>
          <InputText id="UserName" type="text" />
        </div>
        <div class="p-field p-col-12">
          <label for="email">Your Email Address</label>
          <InputText id="email" type="text" />
        </div>
        <div class="p-field p-col-12">
          <label for="Subject">Subject</label>
          <InputText id="Subject" type="text" />
        </div>

        <div class="p-field p-col-12">
          <label for="message">message</label>
          <Textarea id="message" rows="10" />
        </div>
        <div class="p-field p-col-12">
          <Button type="button" label="Send" class="p-d-block p-mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 650px) {
  .m-p-15 {
    margin: 100px;
    margin-top: 15px;
    padding: 100px;
  }
}

@media (max-width: 651px) {
  .m-p-15 {
    margin: 50px;
    margin-top: 15px;
    padding: 50px;
  }
}
</style>