<template>
  <div class="">
    <div class="checkbox-wrapper">
      <input
        class="state"
        :class=[]
        v-model="computedValue"
        :type="type"
        :name="name"
        ref="input"
        :disabled="disabled"
        :size="size"
        :id="id"
        :value="nativeValue"
      />
      <label class="label" :for="id" >
        <div class="checkbox"></div>
        <span class="text"><slot></slot></span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "vn-checkbox",
  data() {
    return {
      newValue: this.value,
    };
  },
  components: {},
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    type: String,
    disabled: Boolean,
    required: Boolean,
    id: String,
    name: String,
    size: String,
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
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("input", value);
      },
    },
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value;
    },
  },
  methods: {
    init() {
      console.log(this.$refs.input.id);
      
      return this.$refs.input.id
    },
    focus() {
            // MacOS FireFox and Safari do not focus when clicked
            this.$refs.input.focus()
        },
    theValue(){
      return this.$refs.input.id
    }
  },
};
</script>
