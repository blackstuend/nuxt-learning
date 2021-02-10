export const state = () => ({
    Device: {
        name:"",
        battery:0,
        id:""
    }
  })
  export const mutations = {
    GetDevice(state,payload){
        console.log(payload)
        state.Device.name = payload.name
        state.Device.id = payload.id
    },
    UpdateBattery(state,payload){
        state.Device.battery = payload
    }
  }
  
  