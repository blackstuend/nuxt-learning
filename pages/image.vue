<template>
  <div class="container">
    <vue-cropper
      ref="cropper"
      :aspect-ratio="16 / 9"
      :src="imgSrc"
      class="mt-3"
      preview=".preview"
    />
    <div class="p-5">
      <input type="file" name="" id="" ref="file" @change="uploadImg" />
      <button class="btn btn-primary" @click="rotate(90)">往右旋轉</button>
      <button class="btn btn-primary" @click="rotate(-90)">往左旋轉</button>
      <button class="btn btn-primary" @click="trigger_upload">上傳圖片</button>
      <button class="btn btn-primary" @click="move(-10, 0)">圖片往左</button>
      <button class="btn btn-primary" @click="move(10, 0)">圖片往右</button>
      <button class="btn btn-primary" @click="move(0, -10)">圖片往上</button>
      <button class="btn btn-primary" @click="move(0, 10)">圖片往下</button>
    </div>
    <div class="px-5 py-2 text-center">
      <div class="h2">Preview</div>
      <a
        href="#"
        download="img.jpg"
        ref="copper_download"
        class="copper_download"
      ></a>
      <button class="btn btn-primary mb-3" @click="trigger_download">
        下載Cropper Image
      </button>
      <div class="preview mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      cropImg: '',
    }
  },
  mounted() {},
  methods: {
    rotate(deg) {
      this.$refs.cropper.rotate(deg)
    },
    trigger_upload() {
      this.$refs.file.click()
    },
    trigger_download() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$refs.copper_download.href = this.cropImg
      console.log(this.$refs.copper_download)
      this.$refs.copper_download.click()
    },
    uploadImg(e) {
      const file = e.target.files[0]
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY)
    },
  },
}
</script>

<style scoped>
input[type='file'] {
  display: none;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.copper_download {
  display: none;
}
</style>