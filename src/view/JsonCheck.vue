<template>
  <div id="jsonCheck" class="container-fluid">
    <div class="row">
      <div class="col-4">
        <input
          type="file"
          class="form-control col-4"
          aria-describedby="basic-addon1"
          @change="selectFile"
        />
      </div>
      <div class="col-4" style="display: flex; gap: 20px">
        <button type="button" class="btn uploadbtn">上傳</button>
        <button type="button" class="btn clearbtn">清空</button>
      </div>
      <div class="col-12" style="display: flex; align-content: center">
        <p class="hint">僅能選擇JSON檔</p>
      </div>
      <div class="col-5">
        <textarea
          disabled
          class="form-control mt-4"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang = "ts" setup>
// import { ref } from "vue";

// const file = ref();

const selectFile = () => {};
</script>