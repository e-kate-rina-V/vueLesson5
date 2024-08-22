<!--Створіть новий Vue компонент, наприклад, CustomSelect.vue.-->
<!--Оголосіть prop, наприклад options, для передачі масиву опцій у компонент.
Використайте v-for для виведення опцій у випадаючому списку на основі переданого масиву опцій.
Використайте v-model для того, щоб компонент міг взаємодіяти з зовнішніми даними. 
Ви можете використовувати v-model з computed properties для створення getter і setter методів.
Стилізуйте ваш компонент, використовуючи CSS або будь-який препроцесор на ваш вибір.-->

<template>
  <div class="custom-select-container">
    <select :value="selectedOption" @change="onChange" class="custom-select">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedOption: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  methods: {
    onChange(event) {
      const selectedValue = event.target.value;
      this.selectedOption = selectedValue;
      alert(`Selected option: ${selectedValue}`);
    }
  }
};
</script>