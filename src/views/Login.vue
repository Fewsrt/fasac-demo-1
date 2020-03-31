<template>
  <div app="login">
    <h1>Login Page</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      buff: "Sub1:<br>"
    };
  },
  mqtt: {
    /** 'VueMqtt/publish1' or '+/publish1' */
    "VueMqtt/publish1"(data) {
      this.buff = this.buff + data + "<br>";
    }
  }
};
</script>

<style></style>
