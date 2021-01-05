<template>
  <div>
    <div class="overlay" @click="$emit('close')">
      <div class="modal">
        <p>Hello Modal</p>
        <button @click="$emit('close')">close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style>
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  z-index: 2;
  width: 400px;
  height: 320px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
}
</style>