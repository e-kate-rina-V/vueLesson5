<template>
  <div id="app">
    <nav>
      <!-- Налаштуйте базові маршрути для декількох компонентів у вашому додатку -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/1">User Page</router-link> |
      <router-link to="/admin">Admin Page</router-link> |
      <router-link to="/non-existent-page">Go to 404 Page</router-link>
    </nav>
    <router-view></router-view>

    <div class="container">
      <section>
        <h2>Data Input</h2>
        <DataInput v-model="inputData" />
        <p class="result">Input value: {{ inputData }}</p>
      </section>

      <section>
        <h2>Form with Validation</h2>
        <ValidationForm />
      </section>

      <section>
        <h2>Counter</h2>
        <Counter v-model="counterValue" />
        <p class="result">Counter value: {{ counterValue }}</p>
      </section>

      <section>
        <h2>Toggle Switch</h2>
        <ToggleSwitch v-model="toggleState" />
        <p class="result">Toggle state: {{ toggleState ? 'On' : 'Off' }}</p>
      </section>

      <section>
        <h2>Dynamic Class</h2>
        <DynamicClass />
      </section>

      <section>
        <h2>Custom Select Component</h2>
        <CustomSelect :options="['Option 1', 'Option 2', 'Option 3']" v-model="selectedOption" />
      </section>
    </div>
  </div>
</template>

<script>
import DataInput from './components/DataInput.vue';
import ValidationForm from './components/ValidationForm.vue';
import Counter from './components/Counter.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import DynamicClass from './components/DynamicClass.vue';
import CustomSelect from './components/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    DataInput,
    ValidationForm,
    Counter,
    ToggleSwitch,
    DynamicClass,
    CustomSelect
  },
  data() {
    return {
      inputData: '',
      counterValue: 0,
      toggleState: false,
      selectedOption: ''
    };
  }
};
</script>
