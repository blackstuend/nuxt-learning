1. 在nuxt插入別人的component想要全域註冊，通常會把以下內容加到plugin

* 如以下，使用vue.use則如一般vue-cli會無法註冊component

```javascript
import Vue from 'vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading)
```

* 只能使用Vue.component來掛載

```javascript
// Init plugin
Vue.component("loading",Loading);
```

網路上也有人詢問，但都沒有解釋，不知你有沒有遇過這種問題~
https://stackoverflow.com/questions/58723536/using-external-component-in-nuxt-not-working

2. 在做BLE他說一定要在HTTPS上面才有辦法進行，這導致我在debug相當不便，於是我使用Heroku來架設，每一次都要上傳重新build，不知有何方法可以加速開發，有想過NFS搭配nginx到一個已經架好HTTPS的地方這樣就可以直接開


