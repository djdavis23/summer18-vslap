<template>
  <div class="vendr">
    <h1>Hello {{machine.name}}</h1>
    <div id="food"></div>
    <div id="money"></div>
    <div id="change"></div>
    <div id="product"></div>

  </div>
</template>

<script>
  export default {
    methods: {},
    computed: {
      machine() {
        return this.$store.state.machine;
      }
    }
  };
</script>