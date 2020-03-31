<template>
  <div app="control">
    <h1>FaSAC Control</h1>
    <button @click="lighton">ON</button>
    <button @click="lightoff">OFF</button>
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      message: null
    };
  },
  methods: {
    lighton() {
      this.$mqtt.publish("raspi/1", "1");
      // alert("Light On");
      console.log("1");
    },
    lightoff() {
      this.$mqtt.publish("raspi/1", "0");
      // alert("Light Off");
      console.log("0");
    }
  },
  mqtt: {
    "raspi/1"(data, topic) {
      console.log(topic + ": " + String.fromCharCode.apply(null, data));
    }
  }
};
</script>

<style></style>
