<template>
  <div class="hello">
    <div class="fullsize-container home center-imp">
      <div class="">
        <p class=" box title">Intro and Documentation</p>
        <button @click="changeTheme" class="">Here it starts</button>
      </div>
      <checkbox></checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testing",
  components: {
    // HelloWorld
    checkbox: () =>
      import(/* webpackChunkName: "about" */ "../components/Checkbox/checkbox"),
  },
  props: {
    msg: String,
  },
  methods: {
    changeTheme() {
      document.documentElement.setAttribute("dark-theme", "dark");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
