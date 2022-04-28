<template>
  <CanvasPaint />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CanvasPaint from "./components/CanvasPaint.vue";

export default defineComponent({
  name: "App",
  components: {
    CanvasPaint,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
