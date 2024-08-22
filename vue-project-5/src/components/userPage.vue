<template>
  <div>
    <h1>User Page</h1>
    <!--Створіть маршрут, який використовує динамічний параметр, і виводьте його в компоненті.-->
    <p>User ID: {{ id }}</p>
    <button @click="goToProfile">Go to Profile</button>

    <router-view></router-view>
  </div>
</template>

<script>
// Налаштуйте вкладені маршрути і виведіть дочірній компонент в батьківському компоненті.
// Реалізуйте програмне перенаправлення між маршрутами за допомогою this.$router.push.
// Налаштуйте маршрут так, щоб параметри шляху передавалися як props до компонента.
export default {
  name: 'UserPage',
  props: ['id'],
  methods: {
    goToProfile() {
      this.$router.push({ name: 'UserProfile', params: { id: this.id } });
    }
  }
};
</script>
