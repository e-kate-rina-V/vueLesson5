<!--Створити компонент "Select Component" з використанням v-model-->
<!--Розробіть новий компонент, який буде представляти собою випадаючий список (select box).-->
<!--Компонент повинен приймати масив опцій як prop, щоб користувач міг динамічно визначати доступні опції.-->
<!--Інтегруйте v-model, щоб забезпечити зв'язування значення компоненту з зовнішньою змінною, так щоб при зміні вибраної опції, змінювалося значення зовнішньої змінної, і навпаки-->
<!--
Стилізуйте компонент так, щоб він був візуально привабливим та відповідав стандартам верстки.-->

<template>
  <div class="select-container">
    <label :for="id" class="select-label">{{ label }}</label>
    <select :id="id" :value="modelValue" @change="updateValue" class="select-box">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    modelValue: [String, Number],
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: 'Select an option'
    },
    id: {
      type: String,
      default: 'select-component'
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>
