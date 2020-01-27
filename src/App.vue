<template>
  <div>
    <h1>Vue.js Functional CSS Module Components</h1>
    <div class="container">
      <BaseCard>Hello World</BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from './components/base/BaseCard.vue';

export default {
  name: `App`,
  components: {
    BaseCard,
  },
};
</script>

<style>
.container {
  max-width: 300px;
}
</style>
