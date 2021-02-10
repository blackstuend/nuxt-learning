<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <label for="select_cateogries" class="mt-3">篩選類別</label>
    <select name="" id="select_cateogries" v-model="select">
      <option value="all" selected>全部</option>
      <option v-for="(item, key) in categories" :key="key">{{ item }}</option>
    </select>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">位置</th>
          <th scope="col">類別</th>
          <th scope="col">時間</th>
          <th scope="col">單號</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in data"
          :key="key"
          v-show="item.ComplexName == select || select == 'all'"
        >
          <th scope="row">{{ item.PlaceName }}</th>
          <td>{{ item.ComplexName }}</td>
          <td>{{ item.CreateTime }}</td>
          <td>{{ item.RptDeptNo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  head() {},
  data() {
    return {
      data: [],
      select: 'all',
      isLoading: false,
    }
  },
  methods: {
    async getData() {
      let vm = this
      vm.isLoading = true
      const api =
        'https://datacenter.taichung.gov.tw/Swagger/OpenData/44ff471a-8bda-429d-b5ba-29eace7b05ed'
      let data = await this.$axios.get(api)
      vm.isLoading = false;
      data.data.forEach((element) => {
        vm.data.push(element)
      })
    },
  },
  mounted() {
    const vm = this
    vm.getData()
    window.addEventListener('scroll', function () {
      let windowHeight = window.innerHeight
      let table_bottom = document.querySelector('table').getBoundingClientRect()
        .bottom
      if (windowHeight - table_bottom >= 10) {
        vm.getData()
      }
    })
  },
  computed: {
    categories() {
      let categories = new Set()
      this.data.forEach((element) => {
        categories.add(element.ComplexName)
      })
      return categories
    },
  },
}
</script>　　