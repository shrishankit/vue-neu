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
      laClass:String,
      size: String,
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
      focus() {
        // MacOS FireFox and Safari do not focus when clicked
        this.$refs.input.focus();
      },
      theValue() {
        return this.$refs.input.id;
      },
    },
  };