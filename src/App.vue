<template>
  <router-link to="/form_01">フォーム画面へ</router-link>
  <router-view></router-view>
  <Modal/>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
</style>
