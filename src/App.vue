<template>
  <div>
    <v-app>
      <!-- <v-app-bar color="primary" dark>
        <h1>FaSAC</h1>
        <v-spacer></v-spacer>

        <v-btn @click="$router.push('/login')" target="_blank" text>
          <span class="mr-2">Login</span>
        </v-btn>

        <v-btn @click="$router.push('/mqtt')" target="_blank" text>
          <span class="mr-2">Control</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar> -->

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
