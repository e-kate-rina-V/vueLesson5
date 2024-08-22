<!--Створіть компонент перемикача (toggle), який використовує v-model. 
Компонент повинен міняти свій стан та виводити різні значення в залежності від свого стану.-->

<template>
  <div @click="toggle" :class="{ on: isChecked, off: !isChecked }">
    <span>{{ isChecked ? 'On' : 'Off' }}</span>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked() {
      return this.modelValue;
    }
  },
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.isChecked);
    }
  }
};
</script>