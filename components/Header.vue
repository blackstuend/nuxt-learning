<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <NuxtLink class="navbar-brand"  to="/getapi">Blackfloat</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/getapi">{{ $t('header.get_api') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/encode">{{ $t('header.Encryption') }}</NuxtLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="/image">{{ $t('header.image') }}</a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/bluetooth">{{ $t('header.bluetooth') }}</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="open_dropdown_menu"
              >
                {{ $t('header.language') }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"  href='#' @click.prevent="toEnglish">{{
                  $t('header.english')
                }}</a>
                <a class="dropdown-item" href='#' @click.prevent="toChinese">{{
                  $t('header.chinese')
                }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner d-flex align-items-center text-white">
        <div class="text-white text-center w-100 h2">Blackfloat</div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data(){
      return {
          banner:"",
      }
  },
  methods: {
    open_dropdown_menu() {
      $('.dropdown-menu').toggle()
    },
    toEnglish(){
      this.$store.commit('SET_LANG', "en");
      this.$i18n.locale = "en"
    },
    toChinese(){
      this.locale = "zh"
      this.$store.commit('SET_LANG', "zh");
      this.$i18n.locale = "zh"
    }
  },
  mounted() {
    $('.dropdown-item').click(() => {
      $('.dropdown-menu').toggle()
    })
    let route_path = this.$route.fullPath.split("/");
    console.log(route_path[route_path.length - 1 ])
    this.topcis  = route_path[route_path.length - 1 ] == "" ? "Get Api" : route_path[route_path.length - 1 ]
  },
}
</script>

<style lang="scss" scoped>
 .banner{
     width: 100%;
     height:400px;
     background-image: url(https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80);
     background-position: center 65%;
     background-size: cover;
     background-repeat: no-repeat;
 }
</style>