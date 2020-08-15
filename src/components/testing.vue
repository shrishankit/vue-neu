<template>
  <div class="hello main-container">
    <span class="title">Testing Components</span>
    <div class="grid">
      <div class="grid-container">
        <p class="">Intro and Documentation</p>
        <button @click="changeTheme" class="">Here it starts</button>
      </div>
      <div class="grid-container">
        <vn-checkbox
          la-class="is-info"
          id="a"
          type="checkbox"
          v-model="checkboxGroup"
          native-value="Silver"
          >Click here!</vn-checkbox
        >
        <vn-checkbox
          id="b"
          type="checkbox"
          v-model="checkboxGroup"
          native-value="serfer"
          >Click here!</vn-checkbox
        >
        {{ checkboxGroup }}
      </div>
      <div class="grid-container">
        <vn-radio
          la-class="is-info"
          id="c"
          
          v-model="radioGroup"
          native-value="Silver"
          >Click here!</vn-radio
        >
        <vn-radio
          id="d"
          v-model="radioGroup"
          native-value="serfer"
          >Click here!</vn-radio
        >
        {{ radioGroup }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testing",
  data() {
    return {
      checkboxGroup: [],
      radioGroup:Boolean,
    };
  },
  components: {
    // HelloWorld
    vnCheckbox: () =>
      import(/* webpackChunkName: "about" */ "../components/Checkbox/checkbox"),
    vnRadio: () =>
      import(/* webpackChunkName: "about" */ "../components/Radio/radio"),
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
<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
  padding: 10px;
}
.grid-container {
  padding: 10px;
}
.grid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.grid > * {
  // background: rgba(0,0,0,0.1);
  border: 1px white solid;
}
</style>
