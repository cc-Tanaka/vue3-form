<template>
  <router-link class="font-semibold" to="/form_01">フォーム画面へ</router-link>
  <router-view></router-view>
  <button @click="openModal">open</button>
  <Modal @close="closeModal" v-show="showModal"></Modal>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  data() {
    return {
      showModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style>
</style>
