<template>
  <div class="hello card-container ">
    <!--  --><span class="title">Testing Components</span><br>
    <div class="card-container ">
      
      <div class="vn-grid">
        <div class="vn-box vn-card-container center-imp">
          <div class="">
            <button @click="changeTheme" class="">Here it starts</button>
          </div>
        </div>
        <div class="vn-box vn-card-container center-imp">
          <div class="">
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
        </div>
        <div class="vn-box vn-card-container center-imp">
          <div class="">
            <vn-radio
              la-class="is-info"
              id="c"
              v-model="radioGroup"
              native-value="Silver"
              >Click here!</vn-radio
            >
            <vn-radio id="d" v-model="radioGroup" native-value="serfer"
              >Click here!</vn-radio
            >
            {{ radioGroup }}
          </div>
        </div>
      </div>
      <div class="vn-grid">
        <div class="vn-box vn-card-container center-imp">
          <div class="">
            <vn-icon icon="mdi mdi-account" size="is-large"></vn-icon>
          </div>
        </div>
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
      radioGroup: Boolean,
    };
  },
  components: {
    // HelloWorld
    vnCheckbox: () =>
      import(/* webpackChunkName: "about" */ "../components/Checkbox/checkbox"),
    vnRadio: () =>
      import(/* webpackChunkName: "about" */ "../components/Radio/radio"),
    vnIcon: () => import("../components/Icon/icon"),
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
.vn-box {
  border: 2px solid lightgray;
  border-radius: 7px;
  padding: 15px;
  margin: 10px;
}

.vn-card-container {
  width: 500px;
  height: 500px;
}
.vn-grid {
  display: inline-flex;
}
</style>
