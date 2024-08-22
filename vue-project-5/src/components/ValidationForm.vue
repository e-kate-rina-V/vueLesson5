<!--Реалізуйте розширену валідацію форми, 
використовуючи v-model для управління станом форми і виведенням повідомлень про помилки.-->

<!--Створіть форму з різними типами полів вводу (текст, число, чекбокс) і використайте v-model для двонаправленого зв'язування даних. 
Змініть значення моделі в коді і перевірте, чи змінилось значення в полі вводу, і навпаки.-->

<template>
  <form @submit.prevent="handleSubmit">

    <DataInput v-model="formData.name" label="Name" id="name" placeholder="Enter your name" @input="validateName" />
    <span v-if="errors.name" class="error">{{ errors.name }}</span>

    <DataInput v-model.number="formData.age" type="number" label="Age" id="age" placeholder="Enter your age" />
    <span v-if="errors.age" class="error">{{ errors.age }}</span>

    <label>
      <input type="checkbox" v-model="formData.subscribe" />
      Subscribe to newsletter
    </label>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import DataInput from './DataInput.vue';

export default {
  name: 'ValidationForm',
  components: { DataInput },
  data() {
    return {
      formData: {
        name: '',
        age: null,
        subscribe: false
      },
      errors: {}
    };
  },
  methods: {
    validateName() {
      this.errors.name = '';
      if (/\d/.test(this.formData.name)) {
        this.errors.name = 'Name cannot contain numbers.';
        this.formData.name = this.formData.name.replace(/\d/g, '');
      }
    },
    validateForm() {
      this.errors = {};

      if (!this.formData.name) {
        this.errors.name = 'Name is required.';
      }
      if (!this.formData.age || this.formData.age <= 0) {
        this.errors.age = 'Age must be a positive number.';
      }

      return Object.keys(this.errors).length === 0;
    },
    handleSubmit() {
      if (this.validateForm()) {
        alert('Form submitted!');
        console.log(this.formData);
      }
    }
  }
};
</script>
