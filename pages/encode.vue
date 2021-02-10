<template>
  <div class="container">
    <ul class="nav nav-tabs mb-4 mt-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          :class="{'active':mode=='base64'}"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click.prevent="mode = 'base64'"
          >Base64</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          :class="{'active':mode=='aes'}"
          href="#home"
          data-toggle="tab"
          @click.prevent="mode = 'aes'"
          >AES</a
        >
      </li>
    </ul>
    <div :is="mode" class="px-4"></div>
  </div>
</template>


<script>
import base64 from '~/components/encryption/base64'
import aes from '~/components/encryption/aes'
export default {
  data() {
    return {
      mode: 'aes',
    }
  },
  components: { base64, aes },
}
</script>