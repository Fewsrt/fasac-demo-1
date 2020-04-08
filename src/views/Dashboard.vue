<template>
  <div>
    <v-btn @click="$router.push('/login')" target="_blank" text>
      <span class="mr-2">Login</span>
    </v-btn>

    <v-btn @click="$router.push('/mqtt')" target="_blank" text>
      <span class="mr-2">Control</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
