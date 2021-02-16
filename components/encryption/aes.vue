<template>
  <div class="aes">
    <div class="border"></div>
    <div class="row">
      <div class="col-md-6">
        <div class="h3">AES Online Encryption</div>
        <small>Enter text to be Encrypted</small>
        <textarea
          name=""
          id=""
          rows="5"
          class="form-control"
          v-model="encode_text"
        ></textarea>
        <div class="h5">OR</div>
        <input type="file" class="form-control" id="aes_file" @change="file_upload" />
        <div class="h5">Select Mode</div>
        <select name="" id="" class="form-control" v-model="mode">
          <option value="ECB">ECB</option>
          <option value="CBC">CBC</option>
        </select>
        <div class="h5">Key Size in Bits</div>
        <select name="" id="" class="form-control" v-model.number="key">
          <option value="128">128</option>
          <option value="256">256</option>
        </select>
        <div class="h5">Enter Secret Key</div>
        <input type="text" class="form-control" v-model="Secret_Key" />
        <button class="btn btn-primary mt-3 btn-lg" @click="encode">
          Encrypt
        </button>
        <div class="h5">Result</div>
        <textarea
          name=""
          rows="5"
          class="form-control mb-5"
          v-model="encode_result"
        ></textarea>
      </div>
      <div class="col-md-6">
        <div class="h3">AES Decryption Encryption</div>
        <small>Enter text to be Decrypted</small>
        <textarea
          name=""
          id=""
          rows="5"
          class="form-control"
          v-model="decode_text"
        ></textarea>
        <div class="h5">Select Mode</div>
        <select name="" id="" class="form-control" v-model="mode">
          <option value="ECB">ECB</option>
          <option value="CBC">CBC</option>
        </select>
        <div class="h5">Key Size in Bits</div>
        <select name="" id="" class="form-control" v-model.number="key">
          <option value="128">128</option>
          <option value="256">256</option>
        </select>
        <div class="h5">Enter Secret Key</div>
        <input type="text" class="form-control" v-model="Secret_Key" />
        <button class="btn btn-primary mt-3 btn-lg" @click="decode">
          Decrypt
        </button>
        <div class="h5">Result</div>
        <textarea
          name=""
          rows="5"
          class="form-control mb-5"
          v-model="decode_result"
        ></textarea>
      </div>
    </div>
  </div>
</template>


<script>
import aesjs from 'aes-js'
import pbkdf2 from 'pbkdf2'
export default {
  data() {
    return {
      encode_text: '',
      decode_text: '',
      encode_result: '',
      decode_result: '',
      mode: 'ECB',
      key: 128,
      Secret_Key: 'blackfloat',
    }
  },
  methods: {
    file_upload(){
      let file = document.querySelector('#aes_file').files[0]
      let reader = new FileReader();
      let vm = this;
      reader.onload = function(e){
        let result = e.target.result
        vm.encode_text = result
      }
      reader.readAsText(file);
    },
    encode() {
      let key = this.key_to_byte(this.Secret_Key, this.key)
      // 填滿字才有辦法做加密
      let text = this.FillupText(this.encode_text, this.key / 8)
      // 將文字轉換為位元組
      let encode_byte = this[`${this.mode}_encode`](text, key)
      let encode_hex = aesjs.utils.hex.fromBytes(encode_byte)
      this.encode_result = encode_hex
      this.decode_text = encode_hex
    },
    decode() {
      String.prototype.rtrim = function (s) {
        return this.replace(new RegExp(s + '*$'), '')
      }
      // 取得 key
      let key = this.key_to_byte(this.Secret_Key, this.key)
      // 十六進位轉二進位
      let decode_byte = aesjs.utils.hex.toBytes(this.decode_text)
      let decode_result = this[`${this.mode}_decode`](decode_byte, key)
      this.decode_result = decode_result.rtrim(' ')
    },
    FillupText(text, size) {
      let len = text.length
      for (let i = 0; i < size - len; i++) {
        text += ' '
      }
      return text
    },
    key_to_byte(Secret_Key, key_byte) {
      return pbkdf2.pbkdf2Sync(Secret_Key, 'salt', 1, key_byte / 8, 'sha512')
    },
    ECB_encode(text, key) {
      let textBytes = aesjs.utils.utf8.toBytes(text)
      let aesEcb = new aesjs.ModeOfOperation.ecb(key)
      return aesEcb.encrypt(textBytes)
    },
    ECB_decode(text, key) {
      let aesEcb = new aesjs.ModeOfOperation.ecb(key)
      let decryptedBytes = aesEcb.decrypt(text)
      return aesjs.utils.utf8.fromBytes(decryptedBytes)
    },
    CBC_encode(text,key){
        let textBytes = aesjs.utils.utf8.toBytes(text)
        let aesCbc = new aesjs.ModeOfOperation.cbc(key);
        return aesCbc.encrypt(textBytes)
    },
    CBC_decode(text,key){
      let aesCbc = new aesjs.ModeOfOperation.cbc(key)
      let decryptedBytes = aesCbc.decrypt(text)
      return aesjs.utils.utf8.fromBytes(decryptedBytes)
    }
  },
}
</script>

<style scoped lang='scss' scoped>
.border {
  width: 2px;
  position: absolute;
  top: 0;
  bottom: 20px;
  left: 50%;
  background-color: #8e8e8d;
  transform: translateX(-50%);
}
.aes {
  position: relative;
}
.h5 {
  margin-top: 1em;
}
</style>