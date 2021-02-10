<template>
  <div class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >Home</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          >Profile</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          >Contact</a
        >
      </li>
    </ul>
    <base64></base64>
  </div>
</template>


<script>
import base64 from '~/components/encryption/base64'
export default {
  components: { base64 },
}
</script>