<template>
  <div class="">
    <div class="checkbox-wrapper">
      <input
        class="state"
        v-model="computedValue"
        type="checkbox"
        :name="name"
        ref="input"
        :disabled="disabled"
        :size="size"
        :id="id"
        :value="nativeValue"
      />
      <label class="label" :for="id">
        <div class="checkbox"></div>
        <span class="text" :class="[laClass]"><slot></slot></span>
      </label>
    </div>
  </div>
</template>
<script>
import checkRadio from "../../utils/mixin/checkRadio"
export default {
  name: "vn-checkbox",
  mixins: [checkRadio],
  data() {
    return {
      newValue: this.value,
    };
  },
  components: {},
  props: {
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
    },
   
  },
};
</script>
