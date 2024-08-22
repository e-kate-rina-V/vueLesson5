<!--Використовуйте v-model для динамічної зміни класів елемента на основі даних, 
введених користувачем.-->

<template>
  <div>
    <input type="text" v-model="dynamicClass" placeholder="Enter class name" @keydown.enter="handleEnter"
      @input="validateInput" />
  </div>
</template>

<script>
export default {
  name: 'DynamicClass',
  data() {
    return {
      dynamicClass: ''
    };
  },
  methods: {
    handleEnter() {
      alert(`Class name changed to: ${this.dynamicClass}`);
    },
    validateInput(event) {
      const value = event.target.value;
      if (!/^[a-zA-Z]*$/.test(value)) {
        event.target.value = value.replace(/[^a-zA-Z]/g, '');
        this.dynamicClass = event.target.value;
      }
    }
  }
};
</script>