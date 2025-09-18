<template>
  <div id="jsonCheck" class="container-fluid">
    <div class="row">
      <div class="col-4">
        <input
          id="file"
          type="file"
          class="form-control col-4"
          aria-describedby="basic-addon1"
          accept=".json,application/json"
          @change="handleFile($event)"
        />
      </div>
      <div class="col-4" style="display: flex; gap: 20px">
        <button type="button" class="btn uploadbtn" @click="uploadJson()">
          上傳
        </button>
        <button type="button" class="btn resetbtn" @click="resetFile()">
          重置
        </button>
      </div>
      <div class="col-12 d-flex align-items-center" style="height: 40px">
        <p class="hint m-0">僅能選擇JSON檔</p>
      </div>
      <div class="col-5">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang = "ts" setup>
import axios from "axios";

const formData = new FormData();

function handleFile(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files) {
    formData.append("file", input.files[0]);
    console.log(formData);
  }
}

//上傳Json
function uploadJson() {
  axios
    .post("http://localhost/cms/jsonChecker", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

//重置檔案選擇器
function resetFile() {}
</script>