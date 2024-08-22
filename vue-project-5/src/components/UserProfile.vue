<template>
  <div>
    <h2>User Profile</h2>
    <p>Profile details for user ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: ['id']
};
</script>
