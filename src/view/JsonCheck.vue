<template>
  <div id="jsonCheck" class="container-fluid">
    <div class="row">
      <div class="col-4">
        <input
          type="file"
          class="form-control col-4"
          aria-describedby="basic-addon1"
          accept="json"
          @change="handleFile($event)"
        />
      </div>
      <div class="col-4" style="display: flex; gap: 20px">
        <button type="button" class="btn uploadbtn">上傳</button>
      </div>
      <div class="col-12 d-flex align-items-center" style="height: 40px">
        <p class="hint m-0">僅能選擇JSON檔</p>
      </div>
      <div class="col-5">
        <textarea
          disabled
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang = "ts" setup>
let jsonFile: any = null;

function handleFile(event: Event) {
  jsonFile = event.target;

  console.log(jsonFile);
}

//重置檔案選擇器
</script>