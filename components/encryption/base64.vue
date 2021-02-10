<template>
  <div>
    <div class="form-group">
      <label for="encode" class="h3">Encode to Base64 format</label>
      <textarea
        name=""
        id="encode"
        cols="30"
        rows="10"
        class="form-control"
        v-model="encode_text"
      ></textarea>
      <button class="btn btn-primary mt-4" @click="encode">encode</button>
      <div class="h3">Result : {{ encode_result }}</div>
    </div>
    <div class="form-group">
      <label for="decode" class="h3">Decode to Base64 format</label>
      <textarea
        name=""
        id="decode"
        cols="30"
        rows="10"
        class="form-control"
        v-model="decode_text"
      ></textarea>
      <button class="btn btn-danger mt-4" @click="decode">decode</button>
      <div class="h3">Result : {{ decode_result }}</div>
    </div>
    <hr />
    <div class="h2">Img to base64 and show</div>
    <div class="form-group">
      <label for="encodeFile" class="h3">Encode File Upload</label>
      <input type="file"  class="form-control" id="encodeFile" @change="encode_file"  />
      <div class="mt-4">
          <img :src="img_src" alt="" class="img-thumbnail" >
      </div>
    </div>
  </div>
</template>


<script>
import { Base64 } from 'js-base64'
export default {
  data() {
    return {
      encode_text: '',
      decode_text: '',
      encode_result: '',
      decode_result: '',
      img_src:""
    }
  },
  mounted() {},
  methods: {
    encode() {
      const vm = this
      vm.encode_result = Base64.encode(vm.encode_text)
    },
    decode() {
      const vm = this
      vm.decode_result = Base64.decode(vm.decode_text)
    },
    encode_file() {
      const reader = new FileReader()
      const vm = this;      
      let download_encode_file = document.querySelector('.download_encode_file')
      let encodefile = document.querySelector('#encodeFile').files[0]
      if(encodefile.type.split("/")[0] != "image")
      {
        alert("請上傳圖片格式")
        return ;
      }
      reader.addEventListener(
        'load',
        function () {
          vm.img_src = reader.result
        },
        false
      )
      reader.readAsDataURL(encodefile)
    },
  },
}
</script>