<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="h3 text-center">請輸入Device Name</div>
        <input
          type="text"
          class="form-control text-center"
          v-model="device_name"
        />
        <div
          class="alert alert-danger mt-2 text-center"
          role="alert"
          v-show="error"
        >
          <strong>請輸入Device Name</strong>
        </div>
        <button class="btn btn-primary mt-3 w-100" @click="add">加入</button>
      </div>
    </div>
    <div class="row mt-2 justify-content-center">
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="card-text">裝置名稱:{{Device.name}}</p>
            <p class="card-text">裝置ID:{{Device.id}}</p>
            <p class="card-text">目前電量:{{Device.battery}}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      device_name: '',
      error: false,
    }
  },
  computed: {
    Device() {
      return this.$store.state.bluetooth.Device
    },
  },
  methods: {
    async add() {
      let filters = []
      let options = {}
      let vm = this;
      filters.push({ services: ['battery_service'] })
      if (this.device_name == '') {
        this.error = true
        return
      } else {
        this.error = false
        filters.push({ name: this.device_name })
        options.filters = filters
      }
      try {
        const device = await navigator.bluetooth.requestDevice(options)
        this.$store.commit("bluetooth/GetDevice",{name:device.name,id:device.id})
        const server = await device.gatt.connect()
        const service = await server.getPrimaryService('battery_service')
        const characteristic = await service.getCharacteristic('battery_level')
        setInterval(async function () {
          let value = await characteristic.readValue()
          vm.$store.commit("bluetooth/UpdateBattery",value.getUint8(0))
        }, 1000)
      } catch (e) {
        console.log(e)
      }
    },

  },
}
</script>